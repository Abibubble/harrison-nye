import styled from 'styled-components'
import Wrapper from './wrapper'
import styles from '../styles/styles'

export default function Invite() {
  return (
    <StyledWrapper>
      <Container>
        <p>You are invited to the wedding reception of</p>
        <h1>Abi Harrison & Conor Nye</h1>
        <p>On</p>
        <h2>12th May 2024</h2>
        <p>At</p>
        <h2>2pm, Location</h2>
      </Container>
    </StyledWrapper>
  )
}

const Container = styled.div`
  padding: 0 ${styles.spacer.small} ${styles.spacer.small};
`

const StyledWrapper = styled(Wrapper)`
  background-color: transparent;
  padding: 0;
`
