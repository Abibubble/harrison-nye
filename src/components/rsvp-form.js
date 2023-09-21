import React, { useRef } from 'react'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import styles from '../styles/styles'
import SubmitButton from './submit-button'

export default function RsvpForm() {
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
    <form ref={form} onSubmit={sendEmail}>
      <Label>Name</Label>
      <Input type='text' name='user_name' />
      <Label>Email</Label>
      <Input type='email' name='user_email' />
      <Label>Phone Number</Label>
      <Input type='tel' name='phone_number' />
      <fieldset>
        <legend>RSVP</legend>
        <Label for='yes'>Yes</Label>
        <Input type='radio' name='rsvp' id='yes' value='Yes' />
        <Label for='no'>No</Label>
        <Input type='radio' name='rsvp' id='no' value='No' />
      </fieldset>
      <Label>Any allergies?</Label>
      <textarea name='allergy' />
      <Label>Any dietary restrictions?</Label>
      <textarea name='dietary' />
      <SubmitButton value='Send' />
    </form>
  )
}

const Label = styled.label`
  display: block;
  margin: 0 auto;
`

const Input = styled.input`
  display: block;
  margin: 0 auto;
`
