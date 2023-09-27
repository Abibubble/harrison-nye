import styled from 'styled-components'
import styles from '../styles/styles'

import Button from '../components/button'
import PageSection from '../components/page-section'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function Gift() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Wedding Gifts</Title>
        <Text>
          We've been together for 8 years, so there aren't any traditional
          wedding gifts that we need.
        </Text>
        <Text>
          There is no pressure to get us a wedding gift, but if you would like
          to, we'd love a donation towards our honeymoon fund.
        </Text>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}

const Text = styled.p`
  margin: ${styles.spacer.small} auto;
`