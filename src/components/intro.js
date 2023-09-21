import styled from 'styled-components'
import styles from '../styles/styles'

export default function Intro({ ...props }) {
  return <StyledIntro>{props.children}</StyledIntro>
}

const StyledIntro = styled.h2`
  font-size: 1.5rem;
  margin-bottom: ${styles.spacer.small};
`
