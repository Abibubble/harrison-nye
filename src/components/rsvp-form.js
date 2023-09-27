import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'
import emailjs from '@emailjs/browser'

import SubmitButton from './submit-button'

import guestList from '../data/guest-list'

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

  const [guestAttending, setGuestAttending] = useState(false)

  function toggleGuestAttending(attending) {
    return () => {
      setGuestAttending(attending)
    }
  }

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Label for='user_name'>Name</Label>
      <Select name='user_name' id='user_name'>
        <option value=''>Please select</option>
        {guestList.map(guest => (
          <option value={guest}>{guest}</option>
        ))}
      </Select>
      <fieldset>
        <legend>Will you be attending?</legend>
        <RsvpSection>
          <Label for='yes'>Yes</Label>
          <Input
            type='radio'
            name='rsvp'
            id='yes'
            value='Yes'
            onClick={toggleGuestAttending(true)}
          />
          <Label for='no'>No</Label>
          <Input
            type='radio'
            name='rsvp'
            id='no'
            value='No'
            onClick={toggleGuestAttending(false)}
          />
        </RsvpSection>
      </fieldset>
      {guestAttending && (
        <>
          <Label for='user_email'>Email</Label>
          <Input type='email' name='user_email' id='user_email' />
          <Label for='phone_number'>Phone Number</Label>
          <Input type='tel' name='phone_number' id='phone_number' />
          <Label for='allergy'>Any allergies?</Label>
          <Textarea name='allergy' id='allergy' />
          <Label for='dietary'>Any dietary restrictions?</Label>
          <Textarea name='dietary' id='dietary' />
          <Label for='song'>Any song requests?</Label>
          <Textarea name='song' id='song' />
        </>
      )}
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
  max-width: 300px;
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

const Select = styled.select`
  margin: 0 auto;
  width: 80%;
  max-width: 300px;
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
  margin-bottom: ${styles.spacer.medium};

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
  max-width: 300px;
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
