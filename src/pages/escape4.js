import Clue from '../components/clue'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape4() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title />
        <Intro>Well done! For the last one, solve this riddle:</Intro>
        <Clue>
          Before you get engaged
          <br />
          In a small box I am carried
          <br />
          I am what gets exchanged
          <br />
          On the day that you get married
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}
