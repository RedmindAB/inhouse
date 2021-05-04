import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Spacer, TextContainer } from '../../theme/base'
import {
  Body1,
  Headline1,
  Headline2,
  Outlined,
  Title1,
} from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'
import * as S from './styled'
import Slide from 'react-reveal/Slide'
import Fade from 'react-reveal/Fade'

type Props = {}

const BrandInnovations = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "Bg_2.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <TitleSection
      title="how we innovate"
      id="brand-innovations"
      style={{ padding: '6rem 3rem', backgroundColor: 'var(--accent)' }}
    >
      <Slide up>
        <div className="title-section-content">
          <TextContainer width="60%" mobile="100%">
            <Title1 uppercase>
              We use brand dna coupled with emergent trends as a springobard to{' '}
              <Outlined>build on-brand creation</Outlined>
            </Title1>
          </TextContainer>
          <Spacer exact={60} mobile={30} />
          <S.Footer>
            <Headline1 uppercase>
              Develop ideas, solve problems, and make cool new stuff happen.
            </Headline1>
            <Body1>
              BRAND INNOVATIONS is where the division's community of developers,
              designers, and idea generators can hang out, share ideas and help
              brands in creating new products, extending experiences with new
              rituals/services, and building ecosystems.
            </Body1>
          </S.Footer>
        </div>
      </Slide>
      <S.Background>
        <Img
          fluid={data.file.childImageSharp.fluid}
          style={{ height: '100%', width: '100%' }}
          imgStyle={{
            backgroundSize: 'cover',
          }}
        />
      </S.Background>
    </TitleSection>
  )
}

export default BrandInnovations
