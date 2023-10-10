import Button from '../components/button'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Home() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Welcome to our escape room website. You'll be tested with a series of
          puzzles and riddles, and if you can solve them all, you'll be rewarded
          with a prize. Good luck!
        </Intro>
        <Intro>
          We know that not all of you will be familiar with escape room puzzles.
          <br />
          If you'd like to avoid the puzzles, use the password we've sent you in
          the password input box below.
          <br />
          If you're up for a challenge, click the "Let's go!" button.
        </Intro>
        <Button href='/password'>Let's go!</Button>
        <PasswordInput intro />
      </PageSection>
    </Wrapper>
  )
}
