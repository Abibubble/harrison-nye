import styled from 'styled-components'
import styles from '../data/styles'

export default function Clue({ ...props }) {
  return <StyledClue>{props.children}</StyledClue>
}

const StyledClue = styled.p`
  font-size: 1.2rem;
  padding: ${styles.spacer.small};
  background-color: ${styles.colour.purple};
  border-radius: ${styles.spacer.tiny};
`
