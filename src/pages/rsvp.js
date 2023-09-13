import styled from 'styled-components'
import RsvpForm from '../components/rsvp-form'
import styles from '../data/styles'
import Wrapper from '../components/wrapper'

export default function Rsvp() {
  return (
    <Wrapper>
      <h1>RSVP</h1>
      <RsvpForm />
    </Wrapper>
  )
}
