import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../styles/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Escape4() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Well done!</Title>
        <Intro>For the last one, solve this riddle</Intro>
      </PageSection>
      <PageSection>
        <Clue>
          Before you get engaged
          <br />
          In a small box it is carried
          <br />
          It is what gets exchanged
          <br />
          On the day that you get married
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: ${styles.spacer.small};
`
