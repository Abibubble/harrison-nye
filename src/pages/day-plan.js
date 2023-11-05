import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import TextWrapper from '../components/text-wrapper'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function DayPlan() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Day Plan</Title>
        <TextWrapper>
          <InfoText>
            This information may change closer to the date, please check back in
            the days leading up to the wedding for confirmed timings
          </InfoText>
          <PlanGrid>
            <p>11.30am</p>
            <p>Arrive at Hillingdon Civic Centre and take your seats</p>
            <p>12pm</p>
            <p>Ceremony begins</p>
            <p>1pm</p>
            <p>Photos</p>
            <p>2.30pm</p>
            <p>Arrive at The Woodman</p>
            <p>3pm</p>
            <p>Lunch</p>
            <p>4pm</p>
            <p>Reception, Evening guests arrive</p>
            <p>6pm</p>
            <p>Food</p>
            <p>10pm</p>
            <p>Carriages</p>
          </PlanGrid>
        </TextWrapper>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const InfoText = styled.p`
  margin: ${styles.spacer.medium} auto;
  text-align: center;
  font-size: 1rem;
  max-width: 500px;

  @media screen and (min-width: ${styles.breakpoint.medium}) {
    font-size: 1.2rem;
  }
`

const PlanGrid = styled.div`
  margin: ${styles.spacer.medium} auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${styles.spacer.tiny};
  max-width: 550px;
`
