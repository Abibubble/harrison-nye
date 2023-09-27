import styled from 'styled-components'
import styles from '../styles/styles'

export default function Link({ ...props }) {
  return (
    <Container className={props.className}>
      <Button href={props.href}>{props.children}</Button>
    </Container>
  )
}

const Container = styled.div`
  width: 75%;
  height: ${styles.spacer.large};
  font-size: 1.5em;
  margin: 0 auto;

  @media screen and (min-width: 653px) {
    font-size: 2em;
    height: ${styles.spacer.huge};
  }
`

const Button = styled.a`
  text-decoration: none;
  width: 100%;
  color: ${styles.colour.black};
  padding: ${styles.spacer.fine} ${styles.spacer.tiny} 0;
  border-bottom: ${styles.spacer.mini} solid ${styles.colour.black};

  &:visited {
    color: ${styles.colour.black};
  }

  &:hover,
  &:focus {
    border-bottom: ${styles.spacer.mini} solid ${styles.colour.blue};
  }
`
