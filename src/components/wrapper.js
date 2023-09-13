import styled from 'styled-components'
import styles from '../data/styles'

export default function Wrapper({ ...props }) {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

const StyledWrapper = styled.div`
  margin: ${styles.spacer.small};
  border-radius: ${styles.spacer.tiny};
  background-color: ${styles.colour.blue};

  @media (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.medium} 0;
  }
`
