import styled from 'styled-components'
import styles from '../styles/styles'

export default function Title({ ...props }) {
  return <StyledTitle>{props.children}</StyledTitle>
}

const StyledTitle = styled.h1`
  font-family: 'Great Vibes', Arial, Helvetica, sans-serif;
  font-size: 2rem;
  padding: ${styles.spacer.medium} ${styles.spacer.small} ${styles.spacer.small};
  background-color: ${styles.colour.blue};
  color: ${styles.colour.black};
  border-radius: ${styles.spacer.tiny};
  margin-bottom: ${styles.spacer.small};
`
