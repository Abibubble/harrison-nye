import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../data/styles'

export default function Home() {
  return (
    <Page>
      <MainText>
        <h1>Hi there!</h1>
        <h2>You're here because you're important to Conor and Abi</h2>
        <h3>
          We've made a little escape room for you - There's a cool prize at the
          end!
        </h3>
      </MainText>
      <Clue>
        <p>
          Let's start easy. Try to guess our <u>password</u>!
        </p>
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

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 50%;
  }
`

const MainText = styled.div`
  margin: ${styles.spacer.small};
`

const Clue = MainText
