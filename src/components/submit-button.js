import styled from 'styled-components'
import styles from '../styles/styles'

export default function SubmitButton({ value }) {
  return <Button type='submit' value={value} />
}

const Button = styled.input`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border-radius: ${styles.spacer.tiny};
  border: ${styles.spacer.fine} solid grey;
  background-color: ${styles.colour.blue};
  font-size: 1.3rem;
  padding: 0 ${styles.spacer.small};
`
