import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'
import emailjs from '@emailjs/browser'

import SubmitButton from './submit-button'

export default function RsvpForm() {
  const form = useRef()
  const navigate = useNavigate()

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
          alert("Thanks! We can't wait to celebrate with you!")
          navigate('/welcome', { replace: true })
        },
        error => {
          alert(
            'Oh no! Something went wrong! Please send us an email at the.harrison.nyes@gmail.com'
          )
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
      <Label>Who are you responding for?</Label>
      <Input type='text' name='people' />
      <fieldset>
        <legend>RSVP</legend>
        <RsvpSection>
          <Label for='yes'>Yes</Label>
          <Input type='radio' name='rsvp' id='yes' value='Yes' />
          <Label for='no'>No</Label>
          <Input type='radio' name='rsvp' id='no' value='No' />
        </RsvpSection>
      </fieldset>
      <Label>Any allergies?</Label>
      <Textarea name='allergy' />
      <Label>Any dietary restrictions?</Label>
      <Textarea name='dietary' />
      <br />
      <SubmitButton value='Send' />
    </form>
  )
}

const Label = styled.label`
  display: block;
  margin: 0 auto;
  font-size: 1.4rem;
`

const Input = styled.input`
  display: block;
  margin: 0 auto;
  width: 75%;
  max-width: 200px;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  &:not([type='radio']) {
    margin-bottom: ${styles.spacer.medium};
  }

  &[type='radio'] {
    height: ${styles.spacer.small};
  }

  @media (min-width: ${styles.breakpoint.small}) {
    width: 60%;
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`

const RsvpSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 50%;
  margin: 0 auto;
`

const Textarea = styled.textarea`
  width: 75%;
  max-width: 200px;
  font-family: 'Cormorant Garamond', Arial, Helvetica sans-serif;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(
    to left,
    ${styles.colour.darkBlue},
    ${styles.colour.darkPurple}
  );
  font-size: 1.4rem;

  @media (min-width: ${styles.breakpoint.small}) {
    width: 60%;
  }

  @media (min-width: ${styles.breakpoint.medium}) {
    width: 30%;
  }
`
