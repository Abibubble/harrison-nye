import styled from 'styled-components'
import styles from '../styles/styles'

export default function Title({ ...props }) {
  return <StyledTitle>{props.children}</StyledTitle>
}

const StyledTitle = styled.h1`
  font-family: 'Great Vibes', Arial, Helvetica, sans-serif;
  font-size: 2rem;
  padding: ${styles.spacer.medium} ${styles.spacer.small} ${styles.spacer.small};
  background: ${styles.colour.transparentWhite};
  color: ${styles.colour.black};
  margin: 0 auto;
  max-width: 300px;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );

  @media (min-width: 560px) {
    margin-top: ${styles.spacer.large};
  }
`
