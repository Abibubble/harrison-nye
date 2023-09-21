import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../styles/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Escape2() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Well done!</Title>
        <Intro>That was definitely too easy. Here's the next clue</Intro>
      </PageSection>
      <PageSection>
        <Clue>
          there's This tune i found
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
