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
            you're unsure, named guests are shown in the{' '}
            <a href='/day-plan'>RSVP</a> dropdown.
          </Text>
          <Text>
            During the ceremony, please do not take photos until after the
            ceremony is over. There will be time for photos in the Four Seasons
            room, as well as photos outside.
          </Text>
          <Text>
            Other than during the ceremony, you're more than welcome to take
            photos at any time, we just request that you don't get in the way of
            our lovely photographer, Gino.
          </Text>
          <Text>
            If you{' '}
            <a href='https://weduploader.com/upload/8Vyk8u1h4PbJrXRC'>
              follow this link
            </a>
            , we'd love for you to upload any photos and videos that you take
            during our wedding. You can also access this link by scanning the QR
            code on the back of the I Spy cards, and we will also send the link
            out via email after the wedding. These images get uploaded directly
            to our Google Drive, and aren't stored anywhere else.
          </Text>
          <Text>We look forward to seeing you there!</Text>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
