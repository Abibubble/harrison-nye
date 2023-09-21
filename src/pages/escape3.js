import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../styles/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Escape3() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Well done!</Title>
        <Intro>For the next one, solve the pigpen cipher below</Intro>
      </PageSection>
      <PageSection>
        <Pigpen>gerbil</Pigpen>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: ${styles.spacer.small};
`

const Pigpen = styled(Clue)`
  font-family: 'pigpen', sans-serif;
  font-size: 2.5rem;
`
