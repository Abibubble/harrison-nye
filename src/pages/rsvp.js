import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'

export default function Rsvp() {
  const form = useRef()

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        'rsvp_service',
        'rsvp_form',
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Page>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type='text' name='user_name' />
        <Label>Email</Label>
        <Input type='email' name='user_email' />
        <Label>Phone Number</Label>
        <Input type='tel' name='phone_number' />
        <Label>RSVP</Label>
        <Input type='radio' name='rsvp' value='Yes' />
        <Input type='radio' name='rsvp' value='No' />
        <Label>Any allergies?</Label>
        <textarea name='allergy' />
        <Label>Any dietary restrictions?</Label>
        <textarea name='dietary' />
        <Submit type='submit' value='Send' />
      </Form>
    </Page>
  )
}

const Page = styled.div`
  height: 100%;
  text-align: center;
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`

const Form = styled.form`
  background-color: #93c2f5;
`

const Label = styled.label``

const Input = styled.input``

const Submit = styled.input``
