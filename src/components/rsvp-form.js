import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import styles from '../styles/styles'
import emailjs from '@emailjs/browser'
import SubmitButton from './submit-button'
import guestList from '../data/guest-list'

export default function RsvpForm() {
  const [guestAttending, setGuestAttending] = useState(false)

  const form = useRef()
  const navigate = useNavigate()

  function handleAttendingChange(event) {
    const attending = event.target.value === 'yes'
    setGuestAttending(attending)
  }

  function sendEmail(event) {
    event.preventDefault()
    emailjs
      .sendForm(
        'rsvp_service',
        'rsvp_form',
        form.current,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        result => {
          alert("Thank you! We've received your RSVP.")
          // TODO: Modal, not alert, with a 'Done' and a 'Add another RSVP' button
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
      <Label for='user_name'>Name</Label>
      <Select name='user_name' id='user_name'>
        <option value=''>Please select</option>
        {guestList.map(guest => {
          return (
            <option key={guest} value={guest}>
              {guest}
            </option>
          )
        })}
      </Select>
      <Label htmlFor='attending'>Will you be attending?</Label>
      <Select name='attending' id='attending' onChange={handleAttendingChange}>
        <option value=''>Please select</option>
        <option value='yes'>Yes</option>
        <option value='no'>No</option>
      </Select>
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
