import styled from 'styled-components'
import styles from '../styles/styles'

export default function Intro({ ...props }) {
  return <StyledIntro>{props.children}</StyledIntro>
}

const StyledIntro = styled.h2`
  font-size: 1.5rem;
  margin: ${styles.spacer.small} 0;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    margin: ${styles.spacer.medium} 0;
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.large} 0;
  }

  @media screen and (min-width: ${styles.breakpoint.large}) {
    margin: ${styles.spacer.huge} 0;
  }
`
