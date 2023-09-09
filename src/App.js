import styled from 'styled-components'

import Header from './components/header'
import Carousel from './components/carousel'
import RsvpForm from './components/rsvp-form'

function App() {
  return (
    <Page>
      <Header />
      <Carousel />
      <RsvpForm />
    </Page>
  )
}

export default App

const Page = styled.div`
  height: 100%;
  text-align: center;
`
