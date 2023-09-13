import styled from 'styled-components'
import RsvpForm from '../components/rsvp-form'
import styles from '../data/styles'

export default function Rsvp() {
  return (
    <Page>
      <h1>RSVP</h1>
      <RsvpForm />
    </Page>
  )
}

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  @media (min-width: ${styles.breakpoint.medium}}) {
    width: 50%;
  }
`
