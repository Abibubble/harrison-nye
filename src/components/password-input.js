import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'

import SubmitButton from './submit-button'

export default function PasswordInput() {
  const navigate = useNavigate()
  const firstPassword = process.env.REACT_APP_FIRST_PASSWORD
  const secondPassword = process.env.REACT_APP_SECOND_PASSWORD
  const thirdPassword = process.env.REACT_APP_THIRD_PASSWORD
  const fourthPassword = process.env.REACT_APP_FOURTH_PASSWORD
  const finalPassword = process.env.REACT_APP_FINAL_PASSWORD
  const alternateFinalPassword = process.env.REACT_APP_FINAL_PASSWORD_2

  function checkPassword(event) {
    event.preventDefault()
    const pathname = window.location.pathname

    let passwordInput = ''

    if (pathname === '/escape4') {
      for (let i = 1; i <= 4; i++) {
        passwordInput += document.getElementById('dial-' + i).value
        console.log(passwordInput)
      }
    } else {
      passwordInput = document
        .getElementById('password-input')
        .value.toLowerCase()
    }

    if (
      passwordInput === finalPassword ||
      passwordInput === alternateFinalPassword
    ) {
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
        passwordInput === thirdPassword
          ? navigate('/escape4', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape4') {
        passwordInput === fourthPassword
          ? navigate('/escape5', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape5') {
        passwordInput === finalPassword ||
        passwordInput === alternateFinalPassword
          ? navigate('/welcome', { replace: true })
          : alert('Oops, try again!')
      }
    }
  }

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dials = [1, 2, 3, 4]

  return (
    <Form onSubmit={checkPassword}>
      <Label for='password'>Enter here:</Label>
      {window.location.pathname === '/escape4' ? (
        <LockWrapper>
          {dials.map(dial => (
            <SelectInput key={dial} name={`dial-${dial}`} id={`dial-${dial}`}>
              {numbers.map(number => (
                <option key={number} value={number}>
                  {number}
                </option>
              ))}
            </SelectInput>
          ))}
        </LockWrapper>
      ) : (
        <Input type='text' id='password-input' name='password' />
      )}
      <SubmitButton value='Submit' />
      <br />
      <SmallText>All the clues you need are on this page.</SmallText>
    </Form>
  )
}

const Form = styled.form`
  padding: ${styles.spacer.small};
  border-radius: ${styles.spacer.tiny};

  @media (min-width: ${styles.breakpoint.medium}) {
    margin: ${styles.spacer.medium} 0;
  }
`

const Label = styled.label`
  margin: ${styles.spacer.tiny};
  font-size: 1.4rem;
`

const Input = styled.input`
  width: 50%;
  max-width: 200px;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const SmallText = styled.p`
  font-size: 1rem;
  font-style: italic;

  @media screen and (min-width: ${styles.breakpoint.small}) {
    font-size: 1.1rem;
  }
`

const LockWrapper = styled.div`
  height: 38px;
  margin-top: ${styles.spacer.small};
`

const SelectInput = styled.select`
  height: 100%;
  width: ${styles.spacer.large};
  text-align: center;
`
