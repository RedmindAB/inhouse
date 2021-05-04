import React, { FunctionComponent, useRef, useState } from 'react'
import Play from '../../assets/svg/Play'
import * as S from './styled'

type Props = {
  src: string
}

const Video: FunctionComponent<Props> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>()

  const playOrPause = () => {
    if (isPlaying) {
      videoRef?.current.pause()
    } else {
      videoRef?.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  return (
    <S.Container onClick={playOrPause}>
      <video
        loop
        playsInline
        style={{ height: '100%', width: '100%', objectFit: 'cover' }}
        ref={videoRef}
      >
        <source src={src} type="video/mp4" />
      </video>
      {!isPlaying && (
        <S.PlayButton>
          <Play />
        </S.PlayButton>
      )}
    </S.Container>
  )
}

export default Video
