import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import RsvpForm from '../components/rsvp-form'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Rsvp() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>RSVP</Title>
        <Info>
          Please fill out one RSVP per person. This allows us to keep track of
          who has which allergies
        </Info>
        <RsvpForm />
        <Button href='/welcome'>Back</Button>
        <InfoText>
          Please RSVP by 31st December 2023. If you have any questions, please
          email us at{' '}
          <EmailLink href='mailto:the.harrison.nyes@gmail.com'>
            the.harrison.nyes@gmail.com
          </EmailLink>
        </InfoText>
      </PageSection>
    </Wrapper>
  )
}

const Info = styled.p`
  margin: ${styles.spacer.medium} 0;
`

const InfoText = styled(Info)`
  color: ${styles.colour.white};
`

const EmailLink = styled.a`
  color: ${styles.colour.white};
  font-weight: bold;
`
