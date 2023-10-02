import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function ParkingAccommodation() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Parking & Accommodation</Title>
        <Subheading>Parking</Subheading>
        <p>
          Unfortunately there isn't much parking space at The Woodman, and we
          recommend that you don't try to park in their car park. There is a
          small amount of free parking down the nearby side roads.
        </p>
        <p>
          Alternatively, there is a car park near Eastcote station, and the 282
          bus will take you to directly outside The Woodman.
        </p>
        <p>
          If you are arriving by public transport, Eastcote station is on the
          Uxbridge branch of the Metropolitan line, followed by the 282 bus to
          take you to The Woodman.
        </p>
        <Subheading>Accommodation</Subheading>
        <p>
          If you're travelling from further afield (or simply don't fancy a long
          taxi ride home), there are a few hotels nearby:
        </p>
        <p>
          <a
            href='https://www.premierinn.com/gb/en/hotels/england/greater-london/london/london-ruislip.html?cid=GLBC_RUIBEE'
            rel='noopener noreferrer'
            target='_blank'
          >
            Premier Inn Ruislip
          </a>{' '}
          is next to the Beefeater pub, which you can get to on the 282 bus,
          followed by a small walk.
        </p>
        <p>
          <a
            href='https://www.premierinn.com/gb/en/hotels/england/hertfordshire/rickmansworth/rickmansworth.html'
            rel='noopener noreferrer'
            target='_blank'
          >
            Premier Inn Rickmansworth
          </a>{' '}
          is a short taxi ride away.
        </p>
        <p>
          <a
            href='https://www.thetudorhotel.com/'
            rel='noopener noreferrer'
            target='_blank'
          >
            The Tudor Hotel
          </a>{' '}
          is approximately a 15 minute walk away.
        </p>
        <p>
          There are many other hotels in the area, and these are the least
          pricey options in the area. If these three options don't suit you,
          feel free to take a look for other places. The Woodman's postcode is
          HA5 2PR, and bear in mind that it will be a Sunday, so some public
          transport may end early.
        </p>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Subheading = styled.h2`
  margin: ${styles.spacer.tiny} 0;
`
