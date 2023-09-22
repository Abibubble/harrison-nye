import styled from 'styled-components'
import styles from '../styles/styles'

export default function Button({ href, ...props }) {
  return <StyledButton href={href}>{props.children}</StyledButton>
}

const StyledButton = styled.a`
  text-decoration: none;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: ${styles.spacer.fine};
  border-image-source: linear-gradient(
    to right,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};

  &:visited {
    color: ${styles.colour.black};
  }
`
