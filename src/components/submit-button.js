import styled from 'styled-components'
import styles from '../styles/styles'

export default function SubmitButton({ value }) {
  return <Button type='submit' value={value} />
}

const Button = styled.input`
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.tiny};
  border-image-source: linear-gradient(
    to right,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};
`
