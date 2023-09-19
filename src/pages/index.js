import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../data/styles'
import Wrapper from '../components/wrapper'
import Title from '../components/title'
import Intro from '../components/intro'
import Clue from '../components/clue'

export default function Home() {
  return (
    <Wrapper>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Welcome to our escape room website. You'll be tested with a series of
          puzzles and riddles, and if you can solve them all, you'll be rewarded
          with a prize. Good luck!
        </Intro>
      </PageSection>
      <PageSection>
        <Clue>
          Let's start easy. Try to guess our <em>password</em>
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: 0 ${styles.spacer.small};
`
