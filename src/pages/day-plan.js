import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import styles from '../styles/styles'

export default function DayPlan() {
  return (
    <Wrapper wedding>
      <Container>
        <p>Something will happen</p>
        <p>At some time</p>
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
