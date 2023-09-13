import styled from 'styled-components'
import PasswordInput from '../components/password-input'
import styles from '../data/styles'
import Wrapper from '../components/wrapper'

export default function Home() {
  return (
    <Wrapper>
      <PageSection>
        <h1>Hi there!</h1>
        <h2>You're here because you're important to Conor and Abi</h2>
        <h3>
          We've made a little escape room for you - There's a cool prize at the
          end!
        </h3>
      </PageSection>
      <PageSection>
        <p>
          Let's start easy. Try to guess our <u>password</u>!
        </p>
      </PageSection>
      <PasswordInput />
    </Wrapper>
  )
}

const PageSection = styled.div`
  margin: 0 ${styles.spacer.small};
`
