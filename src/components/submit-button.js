import styled from 'styled-components'
import styles from '../data/styles'

export default function SubmitButton({ value }) {
  return <Button type='submit' value={value} />
}

const Button = styled.input`
  margin: ${styles.spacer.tiny};
  border-radius: ${styles.spacer.tiny};
  border: ${styles.spacer.fine} solid grey;
  background-color: ${styles.colour.blue};
  font-size: 1.5rem;
  padding: 0 ${styles.spacer.small};
`
