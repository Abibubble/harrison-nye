import styled from 'styled-components'
import styles from '../data/styles'

import Invite from '../components/invite'
import Link from '../components/link'
import Wrapper from '../components/wrapper'
import imageData from '../data/image-data'

export default function Welcome() {
  return (
    <StyledWrapper>
      <Invite />
      <Image
        src={require(`../images/${imageData[11].src}`)}
        alt={imageData[11].alt}
      />
      <StyledLink href='/rsvp'>RSVP here</StyledLink>
      <StyledLink href='/day-plan'>Day plan</StyledLink>
      <StyledLink href='/dress-code'>Dress code</StyledLink>
    </StyledWrapper>
  )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}}) {
    max-height: 500px;
  }
`

const StyledWrapper = styled(Wrapper)`
  background-color: transparent;
`

const StyledLink = styled(Link)`
  width: 100%;
`
