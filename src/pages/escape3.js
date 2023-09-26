import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape3() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>That was definitely too easy. Here's the next clue:</Intro>
        <Clue>
          <ClueText>Holidays</ClueText>
        </Clue>
        <PasswordInput />
      </PageSection>
    </Wrapper>
  )
}
