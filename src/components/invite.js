import styled from 'styled-components'
import styles from '../styles/styles'

export default function Invite() {
  return (
    <Container>
      <p>You are invited to the wedding of</p>
      <h1>Abi Harrison & Conor Nye</h1>
      <p>on</p>
      <h2>12th May 2024 at 12pm</h2>
      <p>at</p>
      <h2>Hillingdon Civic Centre</h2>
    </Container>
  )
}

const Container = styled.div`
  padding: ${styles.spacer.small};
`
