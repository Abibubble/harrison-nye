import styled from 'styled-components'
import styles from '../styles/styles'

export default function Invite() {
  return (
    <Container>
      <p>You are invited to the wedding reception of</p>
      <h1>Abi Harrison & Conor Nye</h1>
      <p>on</p>
      <h2>12th May 2024 at 6pm</h2>
      <p>at</p>
      <h2>The Woodman, Eastcote</h2>
    </Container>
  )
}

const Container = styled.div`
  padding: ${styles.spacer.small};
`
