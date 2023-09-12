import styled from 'styled-components'
import PasswordInput from '../components/password-input'

export default function Escape2() {
  return (
    <Page>
      <MainText>
        <h1>Nicely done!</h1>
        <p>Ok, that was definitely too easy! For the next one...</p>
      </MainText>
      <Clue>
        <p>Clue here</p>
      </Clue>
      <PasswordInput />
    </Page>
  )
}

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const MainText = styled.div`
  margin: 16px;
`

const Clue = MainText
