import styled from 'styled-components'
import Wrapper from './wrapper'

export default function RsvpLink() {
  return (
    <Wrapper>
      <Button href='/rsvp'>Click here to RSVP</Button>
    </Wrapper>
  )
}

const Button = styled.a`
  text-decoration: none;
`
