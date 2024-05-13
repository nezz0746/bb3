import { NextRequest } from 'next/server'
import { noAdFrameImageCID } from '@/config/constants'
import { ImageResponse } from '@vercel/og'
import { AdLand } from '@/lib/adland'
import { constants } from '@adland/common'
import {
  frameAdPositions,
  frameConfig,
  squareBillboardBackground,
} from '@/config/frame'
import { applyRatios } from './utils'

type GetAdsRouteParams = { params: { listingId: string } }
export async function GET(_req: NextRequest, { params }: GetAdsRouteParams) {
  const metadata = await new AdLand().getAdSpaceMetadata(params.listingId)

  /**
   * Constants
   */
  const multiplier = 1.3

  let imageResponse
  let frameHeight = frameConfig.height
  let frameWidth = frameConfig.height

  if (metadata) {
    const { billboardTop, billboardLeft, billboardHeight, billboardWith } =
      applyRatios(frameAdPositions.default, frameWidth)

    if (metadata.imageGatewayURI) {
      imageResponse = new ImageResponse(
        (
          <div
            style={{
              display: 'flex',
              width: frameWidth,
              height: frameHeight,
              backgroundColor: 'black',
            }}
          >
            <div
              style={{
                display: 'flex',
                position: 'relative',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${squareBillboardBackground})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: `${billboardWith}px ${billboardHeight}px`,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  position: 'absolute',
                  top: `${billboardTop}px`,
                  left: `${billboardLeft}px`,
                  width: `${billboardWith}px`,
                  height: `${billboardHeight}px`,
                }}
              >
                <img
                  src={metadata.imageGatewayURI}
                  style={{
                    display: 'flex',
                    width: `${billboardWith}px`,
                    height: `${billboardHeight}px`,
                    objectFit: 'cover',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                />
              </div>
            </div>
          </div>
        ),
        {
          width: frameWidth,
          height: frameHeight,
        },
      )
    }
  } else {
    const plaholderImage = `https://${constants.pinataPublicGateway}/ipfs/${noAdFrameImageCID}`
    // Basic square image
    imageResponse = new ImageResponse(
      (
        <div
          style={{
            display: 'flex',
            width: frameWidth,
            height: frameHeight,
            backgroundColor: 'black',
          }}
        >
          <img
            src={plaholderImage}
            style={{
              display: 'flex',
              width: frameWidth,
              height: frameHeight,
              objectFit: 'contain',
            }}
          />
        </div>
      ),
      {
        width: frameWidth,
        height: frameHeight,
      },
    )
  }

  return imageResponse
}
