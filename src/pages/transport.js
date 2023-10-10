import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Transport() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Transport</Title>
        <Text>
          Unfortunately there isn't a lot of parking space at The Woodman, and
          we recommend that you don't try to park in their car park. There is a
          small amount of free parking down the nearby side roads.
        </Text>
        <Text>
          Alternatively, there is a car park near Eastcote station, and the 282
          bus will take you to directly outside The Woodman.
        </Text>
        <Text>
          If you are arriving by public transport, Eastcote station is on the
          Uxbridge branch of the Metropolitan line, followed by the 282 bus to
          take you to The Woodman.
        </Text>
        <Text>
          The Woodman's postcode is HA5 2PR, and bear in mind that it will be a
          Sunday, so some public transport may end early.
        </Text>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
