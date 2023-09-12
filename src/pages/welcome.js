import styled from 'styled-components'

import Header from '../components/header'
import Carousel from '../components/carousel'
import RsvpLink from '../components/rsvp-link'

function Welcome() {
  return (
    <Page>
      <Header />
      <Carousel />
      <RsvpLink />
    </Page>
  )
}

export default Welcome

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 50%;
  }
`
