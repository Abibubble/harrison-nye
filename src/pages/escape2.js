import Clue from '../components/clue'
import Intro from '../components/intro'
import PageSection from '../components/page-section'
import PasswordInput from '../components/password-input'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Escape2() {
  return (
    <Wrapper escape>
      <PageSection>
        <Title />
        <Intro>That was definitely too easy. Here's the next clue:</Intro>
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
