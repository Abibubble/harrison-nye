import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../data/styles'
import Wrapper from '../components/wrapper'

export default function Escape2() {
  return (
    <Wrapper>
      <PageSection>
        <h1>Nicely done!</h1>
        <p>Ok, that was definitely too easy! For the next one...</p>
      </PageSection>
      <PageSection>
        <p>Clue here</p>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: ${styles.spacer.small};
`
