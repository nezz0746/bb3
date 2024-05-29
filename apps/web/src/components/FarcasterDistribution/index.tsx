import { MEMBER_UNITS_ADMIN_ROLE, getTokenSymbol } from '@/config/constants'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import { AdCampaign, AdSpace } from '@/lib/types'
import { useContext } from 'react'
import { useSmartAccountTxs } from '@/hooks/useSmartAccount'
import {
  commonAdPoolAbi,
  commonAdSpacesAbi,
  gdAv1ForwarderAbi,
  isethAbi,
  superTokenAbi,
} from '@adland/contracts'
import { useBalance, useReadContracts } from 'wagmi'
import { getExplorerLink, truncateAddress } from '@/lib/utils'
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  formatEther,
  zeroAddress,
} from 'viem'
import AdCampaignModal from '../AdCampaignModal'
import { Button } from '../ui/button'
import { framePoolAdminAddressPublicKey } from '@/config/frame'
import useAppContracts from '@/hooks/useAppContracts'
import { toast } from 'sonner'
import { Transaction } from '@biconomy/account'
import { SmartAccountContext } from '@/context/SmartAccountContext'
import { ModalContext } from '@/context/ModalContext'
import FundFlow from './FundFlow'

type FarcasterDistributionProps = {
  adSpace: AdSpace
  adCampaign: AdCampaign
}

type LaunchCampaignProps = {
  flowRate: bigint
  amount: bigint
}

const FarcasterDistribution = ({
  adSpace,
  adCampaign,
}: FarcasterDistributionProps) => {
  const { adSpace_subgraph, tokenX } = adSpace
  const { commonAdPoolAddress, sfPool, sfPoolAddress } = adCampaign
  const { id: spaceId } = adSpace_subgraph
  const { adCommonOwnership, gdaV1Forwarder } = useAppContracts()
  const { bicoAccountAddress } = useContext(SmartAccountContext)
  const { fundAdModal } = useContext(ModalContext)
  const superToken = tokenX?.superToken
  const isNativeCurrency = tokenX?.isNativeToken

  const { data: reads } = useReadContracts({
    contracts: [
      {
        abi: commonAdPoolAbi,
        functionName: 'hasRole',
        address: commonAdPoolAddress,
        args: [MEMBER_UNITS_ADMIN_ROLE, framePoolAdminAddressPublicKey],
      },
      {
        address: tokenX?.underlyingToken,
        functionName: 'balanceOf',
        args: bicoAccountAddress && [bicoAccountAddress],
        abi: erc20Abi,
      },
    ],
    query: {
      enabled: Boolean(commonAdPoolAddress),
      select: (data) => {
        return {
          frameHasMemberUnitsAdminRole: data[0].result,
          erc20Balance: data[1].result,
        }
      },
    },
  })

  const { data: nativeBalance } = useBalance({
    address: bicoAccountAddress,
    query: {
      enabled: isNativeCurrency,
    },
  })

  const balanceOfAdToken =
    (isNativeCurrency ? nativeBalance?.value : reads?.erc20Balance) ?? BigInt(0)

  const { write: writeLaunchCampaign, loading: launchCampaignLoading } =
    useSmartAccountTxs({
      mutationKey: 'fundCampaign',
    })

  const { write, loading: createPoolLoading } = useSmartAccountTxs({
    mutationKey: 'createPool',
  })

  const launchCampaign = async ({ flowRate, amount }: LaunchCampaignProps) => {
    if (!commonAdPoolAddress) {
      toast.error('Must create ad pool first')
      return
    }
    if (!bicoAccountAddress) {
      toast.error('Must have a campaign account')
      return
    }
    if (!sfPoolAddress) {
      toast.error('Pool not found')
      return
    }
    if (!superToken) {
      return console.log('SuperToken must be defined')
    }

    let transactions: Transaction[] = []

    const superTokenAddress = superToken as Address

    transactions.push({
      to: superTokenAddress,
      data: encodeFunctionData({
        abi: isNativeCurrency ? isethAbi : superTokenAbi,
        args: isNativeCurrency ? [] : [superTokenAddress, amount, '0x0'],
        functionName: isNativeCurrency ? 'upgradeByETH' : 'upgradeTo',
      }),
      value: isNativeCurrency ? amount : BigInt(0),
    })

    if (!reads?.frameHasMemberUnitsAdminRole) {
      transactions.push({
        to: commonAdPoolAddress,
        data: encodeFunctionData({
          abi: commonAdPoolAbi,
          args: [MEMBER_UNITS_ADMIN_ROLE, framePoolAdminAddressPublicKey],
          functionName: 'grantRole',
        }),
        value: BigInt(0),
      })
    }

    transactions.push({
      to: gdaV1Forwarder,
      data: encodeFunctionData({
        abi: gdAv1ForwarderAbi,
        args: [
          superTokenAddress,
          bicoAccountAddress,
          sfPoolAddress,
          flowRate,
          zeroAddress,
        ],
        functionName: 'distributeFlow',
      }),
      value: BigInt(0),
    })

    if (transactions.length === 0) {
      return
    }

    writeLaunchCampaign({
      transactions,
    })
  }

  const flowRate = BigInt(sfPool?.flowRate ?? '0')

  return (
    <>
      <CardContent className="flex flex-col gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ad Distribution Pool
            </CardTitle>
            {getTokenSymbol(tokenX?.underlyingToken)}
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="text-2xl font-bold">
                {sfPool?.totalMembers} Distributor
              </div>
              <p className="text-xs text-muted-foreground">
                +{formatEther(flowRate)}{' '}
                {getTokenSymbol(tokenX?.underlyingToken)}
                /week
              </p>
              {sfPool?.flowRate && (
                <FundFlow
                  enabled={flowRate !== BigInt(0)}
                  poolExplorerLink={getExplorerLink(sfPoolAddress, 'address')}
                />
              )}
            </div>
            <div className="grid w-full grid-cols-2 gap-2">
              <Button
                className="col-span-1"
                loading={createPoolLoading}
                disabled={createPoolLoading || Boolean(commonAdPoolAddress)}
                onClick={() => {
                  write({
                    transactions: [
                      {
                        to: adCommonOwnership,
                        data: encodeFunctionData({
                          abi: commonAdSpacesAbi,
                          args: [BigInt(spaceId), superToken],
                          functionName: 'createAdPool',
                        }),
                        value: BigInt(0),
                      },
                    ],
                  })
                }}
              >
                Open Pool
              </Button>
              <Button
                disabled={!Boolean(sfPool)}
                className="col-span-1"
                onClick={() => {
                  fundAdModal.set(true)
                }}
              >
                Fund
              </Button>
            </div>
          </CardContent>
          {/* <CardFooter>
              <div className="flex w-full flex-row items-center justify-center gap-2">
                <Input
                  className="h-full flex-grow cursor-default text-opacity-100 disabled:opacity-100"
                  disabled
                  placeholder={poolAddress}
                />
                <Copiable visible text={poolAddress ?? ''} />
              </div>
            </CardFooter> */}
        </Card>

        <div className="flex flex-row gap-2"></div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden sm:table-cell">Units</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sfPool?.poolMembers.map(({ id, isConnected, units }) => (
              <TableRow key={id}>
                <TableCell>{truncateAddress(id, 10)}</TableCell>
                <TableCell>
                  {isConnected ? 'Connected' : 'Not Connected'}
                </TableCell>
                <TableCell>{units}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <AdCampaignModal
        adSpace={adSpace}
        superTokenBalance={balanceOfAdToken}
        onSubmit={({ flowRate, amount }) => {
          launchCampaign({
            flowRate,
            amount,
          })
        }}
        loading={launchCampaignLoading}
      />
    </>
  )
}

export default FarcasterDistribution
