import styled from 'styled-components'
import Wrapper from './wrapper'

export default function Link({ ...props }) {
  return (
    <Wrapper className={props.className}>
      <Button href={props.href}>{props.children}</Button>
    </Wrapper>
  )
}

const Button = styled.a`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
  }

  &:hover {
    font-weight: bold;
  }
`
