'use client'

import { Copy, ImageIcon, MoreVertical, ShoppingCart } from 'lucide-react'

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
import Image from 'next/image'
import { format } from 'date-fns'
import { formatEther } from 'viem'
import { truncateAddress } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { useContext } from 'react'
import { ModalContext } from '@/context/ModalContext'
import AcquireLeaseModal from '@/components/AcquireLeaseModal'
import UpdateAdDataDialog from '@/components/UpdateAdDataModal'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import SelfPriceAssementModal from '@/components/SelfPriceAssementModal'

type AdSpacePageProps = {
  params: { spaceId: string; id: string }
}

const AdSpacePage = ({ params: { spaceId } }: AdSpacePageProps) => {
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
    <Container className="relative flex min-h-[80vh] flex-row items-start gap-4 py-4">
      <Card className="w-[400px] overflow-hidden font-body">
        <CardHeader className="flex flex-row items-start gap-8 bg-muted/50">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-lg">
              AdSpace {Number(listing?.listingId)}
              <Button
                size="icon"
                variant="outline"
                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <Copy className="h-3 w-3" />
                <span className="sr-only">Copy Order ID</span>
              </Button>
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
            </ul>
          </div>
        </CardContent>
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Owned by
            {isOwner ? (
              ' you'
            ) : (
              <span>{truncateAddress(listing?.listingOwner)}</span>
            )}
          </div>
        </CardFooter>
      </Card>{' '}
      <div className="flex flex-grow flex-col justify-center gap-4 rounded-md">
        {adSpace.metadata?.imageGatewayURI && (
          <div className="relative flex w-full flex-row justify-center rounded-md border bg-white bg-opacity-20">
            <Badge className="absolute right-2 top-2">image</Badge>
            <div className="w-1/2">
              <Image
                src={adSpace.metadata?.imageGatewayURI}
                alt="AdSpace Image"
                className="w-full"
                width={500}
                height={500}
              />
            </div>
          </div>
        )}
        {adSpace.metadata?.description && (
          <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
            <Badge className="absolute right-2 top-2">description</Badge>
            <div className="w-1/2">
              <p className="text-white">{adSpace.metadata?.description}</p>
            </div>
          </div>
        )}
        {adSpace.metadata?.external_url && (
          <div className="relative flex min-h-[50px] w-full flex-row items-center justify-center rounded-md border bg-white bg-opacity-20">
            <Badge className="absolute right-2 top-2">external_url</Badge>
            <div className="w-1/2">
              <Link href={adSpace.metadata?.external_url}>
                <p className="text-white underline">
                  {adSpace.metadata?.external_url}
                </p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </Container>
  )
}

export default AdSpacePage
