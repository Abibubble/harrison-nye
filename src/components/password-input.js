import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'

import SubmitButton from './submit-button'

export default function PasswordInput() {
  const navigate = useNavigate()

  const passwordOne = process.env.REACT_APP_PASSWORD_ONE
  const passwordTwo = process.env.REACT_APP_PASSWORD_TWO
  const passwordThree = process.env.REACT_APP_PASSWORD_THREE
  const passwordFour = process.env.REACT_APP_PASSWORD_FOUR
  const passwordFive = process.env.REACT_APP_PASSWORD_FIVE
  const passwordSix = process.env.REACT_APP_PASSWORD_SIX
  const passwordSeven = process.env.REACT_APP_PASSWORD_SEVEN
  const passwordEight = process.env.REACT_APP_PASSWORD_EIGHT
  const passwordEightAlt = process.env.REACT_APP_PASSWORD_EIGHT_ALT

  function checkPassword(event) {
    event.preventDefault()
    const pathname = window.location.pathname

    let passwordInput = ''

    if (pathname === '/science' || pathname === '/maths') {
      for (let i = 1; i <= 4; i++) {
        passwordInput += document.getElementById('dial-' + i).value
      }
    } else {
      passwordInput = document
        .getElementById('password-input')
        .value.toLowerCase()
    }

    if (passwordInput === passwordEight || passwordInput === passwordEightAlt) {
      navigate('/welcome', { replace: true })
    } else {
      if (pathname === '/') {
        passwordInput === passwordOne
          ? navigate('/poem', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/poem') {
        passwordInput === passwordTwo
          ? navigate('/escape3', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape3') {
        passwordInput === passwordThree
          ? navigate('/pigpen', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/pigpen') {
        passwordInput === passwordFour
          ? navigate('/science', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/science') {
        passwordInput === passwordFive
          ? navigate('/maths', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/maths') {
        passwordInput === passwordSix
          ? navigate('/escape7', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape7') {
        passwordInput === passwordSeven
          ? navigate('/riddle', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/riddle') {
        passwordInput === passwordEight || passwordInput === passwordEightAlt
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
      {window.location.pathname === '/science' ||
      window.location.pathname === '/maths' ? (
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
      <SmallText>
        All the clues you need are on (or linked to from) this page.
      </SmallText>
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
