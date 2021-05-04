import React, { FunctionComponent } from 'react'
import * as S from './styled'
import Masonry from 'react-masonry-css'
import { Title1 } from '../../theme/typography'
import TypeWriter from 'typewriter-effect'
import './typewriter.css'

type Props = {
  pictures: string[]
}

// APP
// EVENT MANAGEMENT
// SET DESIGN
// VENUE MANAGEMENT
// HOSTING
// SUSTAINABILITY GOALS
// MAIL CAMPAIGN

const strings = [
  ['EVENT MANAGEMENT', 'APP DEVELOPMENT'],
  ['SET DESIGN', 'VENUE MANAGEMENT'],
  ['HOSTING', 'SUSTAINABILITY GOALS', 'MAIL CAMPAIGNS'],
]

const PicturesGrid: FunctionComponent<Props> = ({ pictures }) => {
  const renderPicture = (src: string, index: number) => (
    <S.Picture url={src} key={index}>
      {/* <Title1 uppercase>event management</Title1> */}
      <TypeWriter
        options={{
          strings: strings[index],
          autoStart: true,
          loop: true,
          cursorClassName: 'typewriter-cursor',
          wrapperClassName: 'typewriter-wrapper',
        }}
      />
    </S.Picture>
  )

  return <S.Container>{pictures.map(renderPicture)}</S.Container>

  // return (
  //   <Masonry
  //     breakpointCols={3}
  //     className="my-masonry-grid"
  //     columnClassName="my-masonry-grid_column"
  //   >
  //     {pictures.map(renderPicture)}
  //   </Masonry>
  // )
}

export default PicturesGrid
