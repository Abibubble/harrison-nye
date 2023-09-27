import styled from 'styled-components'
import styles from '../styles/styles'

import Invite from '../components/invite'
import Link from '../components/link'
import PageSection from '../components/page-section'
import Wrapper from '../components/wrapper'

import imageData from '../data/image-data'

export default function Welcome() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Invite />
        <Image
          src={require(`../images/${imageData[11].src}`)}
          alt={imageData[11].alt}
        />
        <LinkWrapper>
          <Link href='/rsvp'>RSVP here</Link>
          <Link href='/day-plan'>Day plan</Link>
          <Link href='/dress-code'>Dress code</Link>
          <Link href='/gift'>Wedding gifts</Link>
        </LinkWrapper>
      </PageSection>
    </Wrapper>
  )
}

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: ${styles.spacer.tiny};

  @media screen and (min-width: ${styles.breakpoint.small}) {
    max-height: 400px;
  }

  @media screen and (min-width: 615px) {
    width: 80%;
  }

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    max-width: 600px;
    width: 65%;
  }
`

const LinkWrapper = styled.div`
  padding: ${styles.spacer.small};
  display: grid;
  grid-template-columns: 1fr;

  @media screen and (min-width: 653px) {
    grid-template-columns: repeat(2, 1fr);
  }
`
