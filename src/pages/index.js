import Clue from '../components/clue'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Home() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title />
        <Intro>
          Welcome to our escape room website. You'll be tested with a series of
          puzzles and riddles, and if you can solve them all, you'll be rewarded
          with a prize. Good luck!
        </Intro>
        <Clue>
          Let's start easy. Try to guess our <em>password</em>
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}
