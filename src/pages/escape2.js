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
        <Intro>Ok, that was definitely too easy! For the next one...</Intro>
      </PageSection>
      <PageSection>
        <Clue>
          There's this tune i found
          <br />
          that makes me thInk of you soMehow,
          <br />
          and i play it on repEat
          <br />
          untiL i fall aslEep,
          <br />
          Spilling drinks on my Settee
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: ${styles.spacer.small};
`
