import styled from 'styled-components'

export default function Rsvp() {
  return (
    <Page>
      <p>Rsvp</p>
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
