import styled from 'styled-components'
import styles from '../styles/styles'

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
          <p>2pm</p>
          <p>Chill (& lunch)</p>
          <p>6pm</p>
          <p>Reception</p>
          <p>7pm</p>
          <p>Food</p>
          <p>8pm</p>
          <p>Get drunk</p>
        </PlanGrid>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Button = styled.a`
  text-decoration: none;
  font-family: 'Roboto', Arial, Helvetica, sans-serif;
  margin: ${styles.spacer.tiny};
  border: 6px solid;
  border-image-slice: 1;
  border-width: 4px;
  border-image-source: linear-gradient(
    to right,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  background: ${styles.colour.transparentWhite};
  font-size: 1.4rem;
  padding: 0 ${styles.spacer.small};

  &:visited {
    color: ${styles.colour.black};
  }
`

const PlanGrid = styled.div`
  margin: ${styles.spacer.medium} auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: ${styles.spacer.tiny};
`
