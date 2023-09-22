import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function DressCode() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Dress Code</Title>
        <Text>Wear something</Text>
        <Text>Ideally</Text>
        <Text>Or not</Text>
        <Text>You do you</Text>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Text = styled.p`
  margin: ${styles.spacer.small} auto;
`
