import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../styles/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Escape3() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    document.fonts.load('12px Pigpen').then(() => setIsReady(true))
  }, [])

  return (
    <Wrapper escape>
      <PageSection>
        <Title>Well done!</Title>
        <Intro>For the next one, solve the pigpen cipher below</Intro>
      </PageSection>
      <PageSection>
        {isReady ? <Pigpen>gerbil</Pigpen> : <p>Loading...</p>}
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  padding: ${styles.spacer.small};
`

const Pigpen = styled(Clue)`
  font-family: 'pigpen', sans-serif;
  font-size: 2.4rem;
  padding: ${styles.spacer.large} 60px ${styles.spacer.large} 36px;
`
