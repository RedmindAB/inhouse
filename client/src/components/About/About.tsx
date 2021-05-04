import React from 'react'
import { Spacer, TextContainer } from '../../theme/base'
import { Body1, Headline1, Outlined, Title1 } from '../../theme/typography'
import TitleSection from '../__general/TitleSection/TitleSection'
import Slide from 'react-reveal/Slide'
import ParticleBackground from '../ParticleBackground'
import ScrollingOutlineTitle from '../ScrollingOutlineTitle/ScrollingOutlineTitle'

type Props = {}

const About = () => {
  return (
    <div style={{ position: 'relative' }}>
      {/* <ParticleBackground /> */}
      <Spacer exact={100} mobile={40} />
      <TitleSection title="about us" id="about">
        <Slide up>
          <div className="title-section-content">
            <TextContainer width="85%">
              {/* <ScrollingOutlineTitle
                sections={[
                  'We build ',
                  'collaborations ',
                  'by elevating brands ',
                  'reframing values ',
                  'embracing change ',
                  'and having a ',
                  'positive impact ',
                  'on our planet.',
                ]}
              /> */}
              <Title1 uppercase>
                We build collaborations by elevating brands reframing values
                embracing change and having a{' '}
                <Outlined>positive impact</Outlined> on our planet.
              </Title1>
            </TextContainer>
            <Spacer exact={60} />
            <TextContainer width="700px">
              <Headline1 uppercase>
                We are a brand-driven group that believes in our ability to
                generate positive change with lasting value and smart ideas.
              </Headline1>
              <Spacer exact={30} />
              <Body1>
                The real essence of any brand is the human element. Together, we
                have the opportunity to take responsibility for our future,
                challenge existing values, develop resilience to change, and
                build ecosystems that are more impactful than ever before.
              </Body1>
            </TextContainer>
          </div>
        </Slide>
      </TitleSection>
      <Spacer exact={100} mobile={40} />
    </div>
  )
}

export default About
