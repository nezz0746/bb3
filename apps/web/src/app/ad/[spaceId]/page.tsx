'use client'

import { ImageIcon, MoreVertical, ShoppingCart } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { AdLand } from '@/lib/adland'
import { format } from 'date-fns'
import { formatEther } from 'viem'
import { truncateAddress } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContext, useState } from 'react'
import { ModalContext } from '@/context/ModalContext'
import AcquireLeaseModal from '@/components/AcquireLeaseModal'
import UpdateAdDataDialog from '@/components/UpdateAdDataModal'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import SelfPriceAssementModal from '@/components/SelfPriceAssementModal'
import { getTokenSymbol } from '@/config/constants'
import Image from 'next/image'
import AdPropertyList from '@/components/AdSpaces/AdPropertyList'
import classNames from 'classnames'
import FarcasterIntegration from '@/components/FarcasterIntegration'
import ForecloseDropdownItem from '@/components/AdSpaces/ForecloseDropdownItem'
import { Skeleton } from '@/components/ui/skeleton'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = ({
  params: { spaceId, id: groupId },
}: AdSpacePageProps) => {
  const { address } = useAccount()
  const { acquireLeaseModal, updateAdDataModal, selfAssessmentModal } =
    useContext(ModalContext)

  const { data: adSpace } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  const [selectedIntegration, setSelectedIntegration] = useState<
    'farcaster' | null
  >(null)

  const listing = adSpace?.listing
  const isOwner = listing && listing?.listingOwner === address
  const isBeneficiarty = listing && listing?.taxBeneficiary === address
  const showDropdown = isOwner || isBeneficiarty

  return (
    <div className="relative flex min-h-[80vh] flex-col items-start gap-4 py-4 md:flex-row">
      <Card className="overflow-hidden font-body md:min-w-[400px]">
        <CardHeader className="flex flex-col gap-2 bg-muted/50">
          <div className="flex flex-row items-start gap-8 ">
            <div className="grid gap-0.5">
              <CardTitle className="group flex items-center gap-2 text-lg">
                AdSpace{' '}
                {listing?.listingId ? (
                  Number(listing?.listingId)
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </CardTitle>
              <CardDescription>
                Opened on{' '}
                {listing?.startTimestamp
                  ? format(
                      Number(listing?.startTimestamp ?? 0) * 1000,
                      'MMMM do',
                    )
                  : ''}
              </CardDescription>
            </div>
            <div className="ml-auto flex items-center gap-1">
              {isOwner ? (
                <Button
                  size="sm"
                  variant="default"
                  className="h-8 gap-1"
                  onClick={() => {
                    updateAdDataModal.set(true)
                  }}
                >
                  <ImageIcon className="h-3.5 w-3.5" />
                  <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                    Edit Ad
                  </span>
                </Button>
              ) : (
                <>
                  <Button
                    disabled={!listing}
                    size="sm"
                    variant="default"
                    className="h-8 gap-1"
                    onClick={() => {
                      acquireLeaseModal.set(true)
                    }}
                  >
                    <ShoppingCart className="h-3.5 w-3.5" />
                    <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                      Acquire space
                    </span>
                  </Button>
                </>
              )}

              {showDropdown && (
                <>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="icon" variant="outline" className="h-8 w-8">
                        <MoreVertical className="h-3.5 w-3.5" />
                        <span className="sr-only">More</span>
                      </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                      {isOwner && (
                        <>
                          <DropdownMenuItem
                            onClick={() => {
                              selfAssessmentModal.set(true)
                            }}
                          >
                            Self Assess
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem disabled>Give up</DropdownMenuItem>
                        </>
                      )}
                      {isBeneficiarty && !isOwner && listing && (
                        <ForecloseDropdownItem listingId={listing?.listingId} />
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                  {adSpace && <SelfPriceAssementModal adSpace={adSpace} />}
                  {adSpace && <UpdateAdDataDialog adSpace={adSpace} />}
                </>
              )}
              {adSpace && <AcquireLeaseModal adSpace={adSpace} />}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Ad Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                {listing?.pricePerToken ? (
                  <span>
                    {formatEther(listing?.pricePerToken ?? BigInt(0))}{' '}
                    {getTokenSymbol(listing?.currency)}
                  </span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax Rate</span>
                {listing ? (
                  <span>{Number(listing?.taxRate ?? 0) / 100} %</span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Currencry</span>
                {listing ? (
                  <span>
                    {getTokenSymbol(listing?.currency) ??
                      truncateAddress(listing?.currency)}
                  </span>
                ) : (
                  <Skeleton className="h-4 w-11" />
                )}
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Owner</span>
                {listing ? (
                  <span>
                    {' '}
                    {isOwner ? (
                      ' you'
                    ) : (
                      <span>{truncateAddress(listing?.listingOwner)}</span>
                    )}
                  </span>
                ) : (
                  <Skeleton className="h-4 w-9" />
                )}
              </li>
            </ul>
            <div className="grid gap-3">
              <div className="font-semibold">Distribution</div>
              <ul className="grid grid-cols-2 gap-3">
                <Button
                  variant={'outline'}
                  onClick={() => {
                    if (selectedIntegration !== 'farcaster') {
                      setSelectedIntegration('farcaster')
                    } else {
                      setSelectedIntegration(null)
                    }
                  }}
                  className={classNames(
                    'group flex h-12 w-full flex-row items-center justify-start gap-4 p-1 font-body',
                    {
                      'bg-slate-200': selectedIntegration === 'farcaster',
                    },
                  )}
                >
                  <div className="aspect-square h-full">
                    <Image
                      src="/farcaster.png"
                      width={50}
                      height={50}
                      className="h-full w-full scale-[85%] object-contain"
                      alt="farcaster-logo"
                    />
                  </div>
                  <p>Farcaster</p>
                </Button>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            This ad is frameable on the open web
          </div>
        </CardFooter>
      </Card>{' '}
      {selectedIntegration === null ? (
        <AdPropertyList metadata={adSpace?.metadata} />
      ) : (
        (() => {
          if (selectedIntegration === 'farcaster' && adSpace) {
            return <FarcasterIntegration groupId={groupId} adSpace={adSpace} />
          }
          return null
        })()
      )}
    </div>
  )
}

export default AdSpacePage
