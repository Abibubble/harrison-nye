import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Info() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Information</Title>
        <Text>
          Food will be confirmed closer to the date, but all allergies and
          dietary requirements will be catered for
        </Text>
        <Text>
          Cocktails and mocktails will be provided on arrival to the reception
        </Text>
        <Text>
          There will be a cash / card bar available for the rest of the evening
        </Text>
        <Text>We look forward to seeing you there!</Text>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
