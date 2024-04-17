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
import { Container } from '@/components/Container'
import { AdLand } from '@/lib/adland'
import { format } from 'date-fns'
import { formatEther } from 'viem'
import { truncateAddress } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContext } from 'react'
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
import Copiable from '@/components/Copiable'
import { baseURL } from '@/config/constants'
import { Input } from '@/components/ui/input'
import AdPropertyList from '@/components/AdSpaces/AdPropertyList'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = ({
  params: { spaceId, id: groupId },
}: AdSpacePageProps) => {
  const { address } = useAccount()
  const { acquireLeaseModal, updateAdDataModal, selfAssessmentModal } =
    useContext(ModalContext)

  const { data: adSpace, isLoading } = useQuery({
    queryFn: () => new AdLand().getAdSpace(spaceId),
    queryKey: ['adSpace-', spaceId],
  })

  if (!adSpace || isLoading) return null

  const { listing } = adSpace

  const isOwner = listing?.listingOwner === address

  return (
    <Container className="relative flex min-h-[80vh] flex-col items-start gap-4 py-4 md:flex-row">
      <Card className="overflow-hidden font-body">
        <CardHeader className="flex flex-row items-start gap-8 bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              AdSpace {Number(listing?.listingId)}
            </CardTitle>
            <CardDescription>
              Opened on{' '}
              {format(Number(listing?.startTimestamp) * 1000, 'MMMM do')}
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
            {isOwner && (
              <>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="icon" variant="outline" className="h-8 w-8">
                      <MoreVertical className="h-3.5 w-3.5" />
                      <span className="sr-only">More</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={() => {
                        selfAssessmentModal.set(true)
                      }}
                    >
                      Self Assess
                    </DropdownMenuItem>
                    {/* <DropdownMenuItem>Give up</DropdownMenuItem> */}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem disabled>Give up</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <SelfPriceAssementModal adSpace={adSpace} />
                <UpdateAdDataDialog adSpace={adSpace} />
              </>
            )}
            <AcquireLeaseModal listing={listing} />
          </div>
        </CardHeader>
        <CardContent className="p-6 text-sm">
          <div className="grid gap-3">
            <div className="font-semibold">Ad Details</div>
            <ul className="grid gap-3">
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Price</span>
                <span>{formatEther(listing?.pricePerToken)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Tax Rate</span>
                <span>{Number(listing?.taxRate) / 100} %</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Currencry</span>
                <span>{truncateAddress(listing?.currency)}</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-muted-foreground">Owner</span>
                <span>
                  {' '}
                  {isOwner ? (
                    ' you'
                  ) : (
                    <span>{truncateAddress(listing?.listingOwner)}</span>
                  )}
                </span>
              </li>
              <li className="flex flex-col items-start justify-between gap-2">
                <span className="text-muted-foreground">Share</span>
                <div className="group flex w-full flex-row gap-2">
                  <Input
                    className="flex-grow cursor-default"
                    disabled
                    placeholder={`${baseURL}/app/group/${groupId}/${spaceId}`}
                  />
                  <Copiable
                    text={`${baseURL}/app/group/${groupId}/${spaceId}`}
                  />
                </div>
              </li>
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            This ad is frameable on the open web
          </div>
        </CardFooter>
      </Card>{' '}
      <AdPropertyList metadata={adSpace.metadata} />
    </Container>
  )
}

export default AdSpacePage
