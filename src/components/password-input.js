import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import styles from '../data/styles'
import SubmitButton from './submit-button'

export default function PasswordInput() {
  const navigate = useNavigate()
  const firstPassword = process.env.REACT_APP_FIRST_PASSWORD
  const secondPassword = process.env.REACT_APP_SECOND_PASSWORD
  const finalPassword = process.env.REACT_APP_FINAL_PASSWORD

  function checkPassword() {
    const pathname = window.location.pathname
    const passwordInput = document
      .getElementById('password-input')
      .value.toLowerCase()

    if (passwordInput === finalPassword) {
      navigate('/welcome', { replace: true })
    } else {
      if (pathname === '/') {
        passwordInput === firstPassword
          ? navigate('/escape2', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape2') {
        passwordInput === secondPassword
          ? navigate('/escape3', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape3') {
        passwordInput === finalPassword
          ? navigate('/welcome', { replace: true })
          : alert('Oops, try again!')
      }
    }
  }

  return (
    <Form onSubmit={checkPassword}>
      <Label for='password'>Enter here:</Label>
      <Input type='text' id='password-input' name='password' />
      <SubmitButton value='Submit' />
      <br />
      <SmallText>
        All codes will be lowercase, and there will be no special characters.
        All the clues you need are on this page.
      </SmallText>
    </Form>
  )
}

const Form = styled.form`
  margin: ${styles.spacer.small};
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.medium} 0;
  }
`

const Label = styled.label`
  margin: ${styles.spacer.tiny};
  font-size: 1.1rem;
`

const Input = styled.input`
  width: 50%;
  border-radius: ${styles.spacer.tiny};
  border: ${styles.spacer.fine} solid grey;
  font-size: 1.5rem;

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const SmallText = styled.p`
  font-size: 0.9rem;
  font-style: italic;
`
