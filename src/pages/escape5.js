import Clue from '../components/clue'
import ClueText from '../components/clue-text'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape5() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title>Bubble & Squeak</Title>
        <Intro>Well done! For the last one, solve this riddle:</Intro>
        <Clue>
          <ClueText>
            Before you get engaged
            <br />
            In a small box I am carried
            <br />
            I am what gets exchanged
            <br />
            On the day that you get married
          </ClueText>
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}
