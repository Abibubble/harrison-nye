import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export default function PasswordInput() {
  const navigate = useNavigate()
  const firstPassword = process.env.REACT_APP_FIRST_PASSWORD
  const secondPassword = process.env.REACT_APP_SECOND_PASSWORD
  const finalPassword = process.env.REACT_APP_FINAL_PASSWORD

  function checkPassword() {
    const pathname = window.location.pathname
    const passwordInput = document.getElementById('password')

    if (passwordInput.value === finalPassword) {
      navigate('/welcome', { replace: true })
    } else {
      if (pathname === '/') {
        passwordInput.value === firstPassword
          ? navigate('/escape2', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape2') {
        passwordInput.value === secondPassword
          ? navigate('/escape3', { replace: true })
          : alert('Oops, try again!')
      } else if (pathname === '/escape3') {
        passwordInput.value === finalPassword
          ? navigate('/welcome', { replace: true })
          : alert('Oops, try again!')
      }
    }
  }

  return (
    <Form>
      <Label for='password'>Enter here:</Label>
      <Input type='text' id='password' name='password' />
      <Button onClick={checkPassword}>Submit</Button>
      <br />
      <small>
        All codes will be lowercase, and there will be no special characters
      </small>
    </Form>
  )
}

const Form = styled.form`
  margin: 16px;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: 24px 0;
  }
`

const Label = styled.label`
  margin: 8px;
  font-size: 1.5rem;
`

const Input = styled.input`
  width: 50%;
  border-radius: 8px;
  border: 2px solid grey;
  font-size: 1.5rem;

  @media (min-width: 768px) {
    width: 30%;
  }
`

const Button = styled.button`
  margin: 8px;
  border-radius: 8px;
  border: 2px solid grey;
  background-color: #93c2f5;
  font-size: 1.5rem;
  padding: 0 16px;
`
