import styled from 'styled-components'
import styles from '../data/styles'

import Header from '../components/header'
import Carousel from '../components/carousel'
import RsvpLink from '../components/rsvp-link'
import Wrapper from '../components/wrapper'

export default function Welcome() {
  return (
    <Wrapper>
      <Header />
      <Carousel />
      <RsvpLink />
    </Wrapper>
  )
}
