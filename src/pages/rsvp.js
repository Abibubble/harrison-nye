import styled from 'styled-components'
import styles from '../styles/styles'

import RsvpForm from '../components/rsvp-form'
import Wrapper from '../components/wrapper'

export default function Rsvp() {
  return (
    <Wrapper wedding>
      <Heading>RSVP</Heading>
      <RsvpForm />
    </Wrapper>
  )
}

const Heading = styled.h1`
  color: ${styles.colour.black};
`
