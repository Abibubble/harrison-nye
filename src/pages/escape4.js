import Clue from '../components/clue'
import ClueText from '../components/clue-text'
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
        <Intro>
          Well done! Now, some maths and science to get your brain going:
        </Intro>
        <Clue>
          <ClueText>((Au + Ag) * Ne) - Cs</ClueText>
        </Clue>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}
