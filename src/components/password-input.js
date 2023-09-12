import styled from 'styled-components'

export default function PasswordInput() {
  return (
    <Form>
      <Label for='password'>Enter here:</Label>
      <Input type='text' id='password' name='password' />
      <Button type='submit' value='Submit' />
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
`

const Input = styled.input`
  width: 50%;
  border-radius: 8px;
  border: 2px solid grey;

  @media (min-width: 768px) {
    width: 30%;
  }
`

const Button = styled.input`
  margin: 8px;
  border-radius: 8px;
  border: 2px solid grey;
  background-color: #93c2f5;
`
