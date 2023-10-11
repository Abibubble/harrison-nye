import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import TextWrapper from '../components/text-wrapper'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Transport() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Transport</Title>
        <Subtitle>Hillingdon Civic Centre</Subtitle>
        <TextWrapper>
          <Text>
            There is no parking at the Hillingdon Civic Centre. However, The
            Chimes multi-storey car park is only a minute's walk away, and costs
            £2.70 for parking on Sundays. The postcode for this is UB8 1TP.
          </Text>
          <Text>
            The Hillingdon Civic Centre is a 5 minute walk from Uxbridge
            station, which is on the Metropolitan and Piccadilly lines.
          </Text>
          <Text>
            The U1, U3, U4, U7, and 427 buses all stop directly outside the
            Hillingdon Civic Centre. Any other bus going to Uxbridge will take
            you to the bus station, which is a 5 minute walk away.
          </Text>
        </TextWrapper>
        <Subtitle>The Woodman</Subtitle>
        <TextWrapper>
          <Text>
            Unfortunately there isn't a lot of parking space at The Woodman, and
            we recommend that you don't try to park in their car park. There is
            a small amount of free parking down the nearby side roads.
          </Text>
          <Text>
            Alternatively, there is a car park near Eastcote station, and the
            282 bus will take you to directly outside The Woodman.
          </Text>
          <Text>
            If you are arriving by public transport, Eastcote station is on the
            Uxbridge branch of the Metropolitan line, followed by the 282 bus to
            take you to The Woodman.
          </Text>
          <Text>
            The Woodman's postcode is HA5 2PR, and bear in mind that it will be
            a Sunday, so some public transport may end early.
          </Text>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin: ${styles.spacer.small} auto;
  max-width: 500px;
`
