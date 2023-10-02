import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function DayPlan() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Day Plan</Title>
        <PlanGrid>
          <p>12pm</p>
          <p>Ceremony</p>
          <p>1pm</p>
          <p>Photos</p>
          <p>2.30pm</p>
          <p>Reception</p>
          <p>6pm</p>
          <p>Food</p>
          <p>10pm</p>
          <p>Home time</p>
        </PlanGrid>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const PlanGrid = styled.div`
  margin: ${styles.spacer.medium} auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${styles.spacer.tiny};
`
