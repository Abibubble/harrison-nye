import styled from 'styled-components'
import styles from '../data/styles'

import Header from '../components/header'
import Carousel from '../components/carousel'
import RsvpLink from '../components/rsvp-link'

export default function Welcome() {
  return (
    <Page>
      <Header />
      <Carousel />
      <RsvpLink />
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
