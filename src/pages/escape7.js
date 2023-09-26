import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape7() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>
          Phew, that's enough maths for one day! Here's your next one:
        </Intro>
        <Clue>
          <ClueText>House</ClueText>
        </Clue>
        <PasswordInput />
      </PageSection>
    </Wrapper>
  )
}
