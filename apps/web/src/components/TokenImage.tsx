import { getTokenSymbol } from '@/config/constants'
import { Address } from 'viem'
import Image from 'next/image'
import { forwardRef } from 'react'

const tokenSources: Record<string, string> = {
  DAI: '/tokens/dai.webp',
  DEGEN: '/tokens/degen.webp',
  BLEU: '/tokens/bleu.webp',
  USDC: '/tokens/usdc.webp',
  ETH: '/tokens/eth.png',
  TREE: '/tokens/tree.png',
}

const TokenImage = forwardRef(
  (
    {
      address,
      className,
    }: { address: Address | string } & React.HTMLAttributes<HTMLImageElement>,
    ref: React.ForwardedRef<any>,
  ) => {
    const symbol = getTokenSymbol(address) ?? 'ETH'
    return (
      <Image
        ref={ref}
        src={tokenSources[symbol]}
        width={32}
        height={32}
        className={className}
        alt={symbol}
      />
    )
  },
)

TokenImage.displayName = 'TokenImage'

export default TokenImage
