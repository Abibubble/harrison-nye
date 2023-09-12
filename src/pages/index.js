import styled from 'styled-components'

function Home() {
  return (
    <Page>
      <p>Home</p>
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
