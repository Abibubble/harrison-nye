import styled from 'styled-components'
import styles from '../data/styles'

export default function Title({ ...props }) {
  return <StyledTitle>{props.children}</StyledTitle>
}

const StyledTitle = styled.h1`
  font-size: 2rem;
  padding: ${styles.spacer.small};
  background-color: ${styles.colour.blue};
  border-radius: ${styles.spacer.tiny};
  margin-bottom: ${styles.spacer.small};
`
