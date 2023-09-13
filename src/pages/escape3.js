import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../data/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Escape2() {
  return (
    <Wrapper>
      <PageSection>
        <Title>Nicely done!</Title>
        <Intro>
          Ok, that was definitely too easy! For the next one, solve the pigpen
          cypher below
        </Intro>
      </PageSection>
      <PageSection>
        <Clue>Clue here</Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: ${styles.spacer.small};
`
