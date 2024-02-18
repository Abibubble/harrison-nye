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
            We're so excited to celebrate our wedding with you! Here's some
            information that you might find useful. Please don't hesitate to
            reach out to us if you have any questions.
          </Text>
          <Text>
            Please see the <a href='/day-plan'>day plan</a> for full details
            about the order of the day.
          </Text>
          <Text>
            Lunch will be a buffet, and dinner will be an indoor BBQ. All
            allergies and dietary requirements will be catered for
          </Text>
          <Text>There will be a cash / card bar available</Text>
          <Text>
            Partners and children are welcome by named invitation only. If
            you're unsure, named guests are shown in the RSVP dropdown.
          </Text>
          <Text>
            During the ceremony, please do not take photos until after the
            ceremony is over. There will be time for photos in the Four Seasons
            room, as well as photos outside in their courtyard. Other than
            during the ceremony, you're more than welcome to take photos at any
            time, we just request that you don't get in the way of our lovely
            photographer, Gino.
          </Text>
          <Text>
            After the wedding, we will send out a link where we'd love for you
            to upload any photos you took during our wedding.
          </Text>
          <Text>We look forward to seeing you there!</Text>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
