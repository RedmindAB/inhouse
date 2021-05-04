import React, { useEffect, useRef, useState } from 'react'
import * as S from './styled'
import Particles from 'react-tsparticles'

type Props = {}

const options = {
  particles: {
    number: { value: 80, density: { enable: false, value_area: 800 } },
    color: { value: '#ff4e15' },

    opacity: {
      value: 0.48,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  retina_detect: false,
}

const ParticleBackground = () => {
  const { current: id } = useRef('123')
  const [height, setHeight] = useState(0)

  const containerId = `particle-container-${id}`

  useEffect(() => {
    const element = document.getElementById(containerId)

    if (element) {
      console.log('particle height: ', height)
      setHeight(element.clientHeight)
    }

    document.addEventListener('mousemove', ({ clientX, clientY }) => {
      const offsetX = clientX / window.innerWidth // 0 -> 1
      const offsetY = clientY / window.innerHeight // 0 -> 1
      const skewModifier = 0.5

      // document.getElementById('tsparticles').style.transform = `translate(-${
      //   offsetX * 50
      // }px, -${offsetY * 50}px)`

      const skew = `skew(${offsetX * skewModifier}deg, ${
        offsetY * skewModifier
      }deg) translate(-${offsetX * 20}px, -${offsetY * 20}px)`

      // document
      //   .querySelectorAll('h6')
      //   .forEach((el) => (el.style.transform = skew))
    })
  }, [])

  return (
    <S.Container id={containerId}>
      {height > 0 && (
        <Particles
          id="tsparticles"
          height={height + 'px'}
          width="100%"
          options={options}
        />
      )}
    </S.Container>
  )
}

export default ParticleBackground
