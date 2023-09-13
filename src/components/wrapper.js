import styled from 'styled-components'
import styles from '../data/styles'

export default function Wrapper({ ...props }) {
  return (
    <StyledWrapper className={props.className}>{props.children}</StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  width: 90%;
  margin: ${styles.spacer.small} auto;
  border-radius: ${styles.spacer.tiny};
  background-color: ${styles.colour.transparentBlue};
  text-align: center;
  height: 100%;
  padding: ${styles.spacer.small} 0;

  @media (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.medium} 0;
    width: 50%;
  }
`
