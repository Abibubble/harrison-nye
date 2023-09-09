import styled from 'styled-components'

export default function Header() {
  return (
    <Wrapper>
      <h1>Abi Harrison & Conor Nye</h1>
      <h2>12th May 2024</h2>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin: 24px 8px;
  border: 2px solid black;
  border-radius: 8px;
  background-color: lightskyblue;
`
