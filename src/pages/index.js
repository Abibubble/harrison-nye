import styled from 'styled-components'
import PasswordInput from '../components/password-input'

function Home() {
  return (
    <Page>
      <h1>Want to play a game?</h1>
      <h2>There's a great prize at the end!</h2>
      <PasswordInput />
      <a href='/welcome'>Welcome</a>
      <a href='/rsvp'>RSVP</a>
    </Page>
  )
}

export default Home

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`
