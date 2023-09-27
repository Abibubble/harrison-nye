import Button from '../components/button'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
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
          We know not all of you will be familiar with escape room puzzles, so
          if you'd like an easier version, click the easy mode button below. If
          you're up for a challenge, click the hard mode button.
        </Intro>
        <Button href='/escape7'>Easy mode</Button>
        <br />
        <br />
        <Button href='/escape1'>Hard mode</Button>
      </PageSection>
    </Wrapper>
  )
}
