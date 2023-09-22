import styled from 'styled-components'
import styles from '../styles/styles'

import RsvpForm from '../components/rsvp-form'
import Wrapper from '../components/wrapper'

export default function Rsvp() {
  return (
    <Wrapper wedding>
      <h1>RSVP</h1>
      <RsvpForm />
    </Wrapper>
  )
}
