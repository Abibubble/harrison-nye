import Button from '../components/button'
import PageSection from '../components/page-section'
import Text from '../components/text'
import Title from '../components/title'
import Wrapper from '../components/wrapper'

export default function DressCode() {
  return (
    <Wrapper wedding>
      <PageSection>
        <Title>Dress Code</Title>
        <Text>Standard wedding attire</Text>
        <Text>
          But don't feel the need to be uncomfortable - it's a long day!
        </Text>
        <Text>
          Heels aren't required, so feel free to wear flats for comfort
        </Text>
        <Text>
          As the reception will be in marquees outside, make sure you bring
          something warm for the evening
        </Text>
        <Text>And don't forget your dancing shoes!</Text>
        <Button href='/welcome'>Back</Button>
      </PageSection>
    </Wrapper>
  )
}
