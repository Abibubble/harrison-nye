import styled from 'styled-components'
import Wrapper from './wrapper'
import styles from '../data/styles'

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <p>You are invited to the wedding reception of</p>
        <h1>Abi Harrison & Conor Nye</h1>
        <p>On</p>
        <h2>12th May 2024</h2>
        <p>At</p>
        <h2>Somewhere</h2>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  padding: ${styles.spacer.small};
`
