import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles'

import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

import PigpenImage from '../images/pigpen.png'

export default function Escape3() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.load('12px Pigpen').then(() => setIsReady(true))
  }, [])

  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Well done! For the next one, solve the pigpen cipher below:
        </Intro>
        <Clue>
          {isReady ? <Pigpen>gerbil</Pigpen> : <Loading>Loading...</Loading>}
        </Clue>
      </PageSection>
      <PasswordInput />
      <Image src={PigpenImage} alt='pigpen decrypt' />
    </Wrapper>
  )
}

const Pigpen = styled(ClueText)`
  font-family: 'pigpen', sans-serif;
  font-size: 2.4rem;
  padding: ${styles.spacer.large} ${styles.spacer.tiny} ${styles.spacer.large};
`

const Loading = styled.p`
  color: ${styles.colour.black};
`

const Image = styled.img`
  background-color: ${styles.colour.transparentWhite};
  width: 100%;
`
