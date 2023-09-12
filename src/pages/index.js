import styled from 'styled-components'
import PasswordInput from '../components/password-input'

export default function Home() {
  return (
    <Page>
      <h1>Hi there!</h1>
      <h2>You're here because you're important to Conor and Abi</h2>
      <h3>
        We've made a little escape room for you - There's a cool prize at the
        end!
      </h3>
      <p>
        Let's start easy. Try to guess our <u>password</u>!
      </p>
      <PasswordInput />
    </Page>
  )
}

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 8px;

  @media (min-width: 768px) {
    width: 50%;
  }
`
