import PageSection from '../components/page-section'
import RsvpForm from '../components/rsvp-form'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Rsvp() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>RSVP</Title>
        <RsvpForm />
      </PageSection>
    </Wrapper>
  )
}
