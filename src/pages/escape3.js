import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import styles from '../styles/styles'

import Clue from '../components/clue'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape3() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.load('12px Pigpen').then(() => setIsReady(true))
  }, [])

  return (
    <Wrapper escape>
      <PageSection>
        <Title />
        <Intro>
          Well done! For the next one, solve the pigpen cipher below:
        </Intro>
        {isReady ? <Pigpen>gerbil</Pigpen> : <p>Loading...</p>}
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const Pigpen = styled(Clue)`
  font-family: 'pigpen', sans-serif;
  font-size: 2.4rem;
  padding: ${styles.spacer.large} 60px ${styles.spacer.large} 36px;
`
