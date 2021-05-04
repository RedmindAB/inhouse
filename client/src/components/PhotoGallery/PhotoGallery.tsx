import React, { FunctionComponent, useEffect, useState } from 'react'
import Gallery from 'react-photo-gallery'
import { disablePageScroll, enablePageScroll } from '../../util/helpers'
import { Spacer, TextContainer } from '../../theme/base'
import { Body2 } from '../../theme/typography'
import * as S from './styled'

type Photo = {
  src: string
  srcSet?: string | string[]
  sizes?: string | string[]
  width: number
  height: number
  alt?: string
  key?: string
  title?: string
  description?: string
}

type Props = {
  photos: Photo[]
}

const PhotoGallery: FunctionComponent<Props> = ({ photos }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number>(null)

  const onClickPhoto = (_, { index }) => {
    setSelectedPhotoIndex(index)
  }

  const closeLightbox = () => setSelectedPhotoIndex(null)

  useEffect(() => {
    if (typeof selectedPhotoIndex === 'number') {
      disablePageScroll()
    } else {
      enablePageScroll()
    }

    return enablePageScroll
  }, [selectedPhotoIndex])

  return (
    <>
      {typeof selectedPhotoIndex === 'number' && (
        <S.Lightbox onClick={closeLightbox}>
          <span>
            <img
              src={photos[selectedPhotoIndex].src}
              alt={photos[selectedPhotoIndex].title}
              style={{ maxHeight: '80vh' }}
            />
            <Spacer h16 />
            <TextContainer width={photos[selectedPhotoIndex].width + 'px'}>
              <Body2>
                <span className="bold">{photos[selectedPhotoIndex].title}</span>
              </Body2>
              <Spacer h04 />
              <Body2>{photos[selectedPhotoIndex].description}</Body2>
            </TextContainer>
          </span>
        </S.Lightbox>
      )}
      <S.Container>
        <Gallery photos={photos} onClick={onClickPhoto} direction="column" />
      </S.Container>
    </>
  )
}

export default PhotoGallery
