import styled from 'styled-components'
import styles from '../styles/styles'

import Wrapper from '../components/wrapper'

export default function DressCode() {
  return (
    <Wrapper wedding>
      <Container>
        <p>Wear something</p>
        <Button href='/welcome'>Back</Button>
      </Container>
    </Wrapper>
  )
}

const Container = styled.div`
  padding: 0 ${styles.spacer.small} ${styles.spacer.small};
`

const Button = styled.a`
  margin: ${styles.spacer.tiny};
  border-radius: ${styles.spacer.tiny};
  border: ${styles.spacer.fine} solid grey;
  background-color: ${styles.colour.blue};
  font-size: 1.5rem;
  padding: 0 ${styles.spacer.small};
`
