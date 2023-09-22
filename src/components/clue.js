import styled from 'styled-components'
import styles from '../styles/styles'

import clueImg from '../images/clue.webp'

export default function Clue({ ...props }) {
  return <StyledClue className={props.className}>{props.children}</StyledClue>
}

const StyledClue = styled.p`
  font-size: 1.2rem;
  min-height: 60px;
  width: 60%;
  padding: ${styles.spacer.large};
  background: url(${clueImg}) no-repeat center center;
  background-size: cover;
  margin: 0 auto;
  color: ${styles.colour.black};
`
