import styled from 'styled-components'
import Wrapper from '../components/wrapper'
import styles from '../data/styles'

export default function DayPlan() {
  return (
    <StyledWrapper>
      <Container>
        <p>Something will happen</p>
        <p>At some time</p>
        <Button href='/welcome'>Back</Button>
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

const Button = styled.a`
  margin: ${styles.spacer.tiny};
  border-radius: ${styles.spacer.tiny};
  border: ${styles.spacer.fine} solid grey;
  background-color: ${styles.colour.blue};
  font-size: 1.5rem;
  padding: 0 ${styles.spacer.small};
`
