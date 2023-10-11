import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import TextWrapper from '../components/text-wrapper'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Info() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Information</Title>
        <TextWrapper>
          <Text>
            Food will be confirmed closer to the date, but all allergies and
            dietary requirements will be catered for
          </Text>
          <Text>
            Cocktails and mocktails will be provided on arrival to The Woodman
          </Text>
          <Text>
            There will be a cash / card bar available for the rest of the
            evening
          </Text>
          <Text>
            You're more than welcome to take photos at any time, we just request
            that you don't get in the way of our lovely photographer, Gino.
          </Text>
          <Text>We look forward to seeing you there!</Text>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
