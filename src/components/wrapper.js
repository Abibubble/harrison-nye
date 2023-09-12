import styled from 'styled-components'

export default function Wrapper({ ...props }) {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

const StyledWrapper = styled.div`
  margin: 16px;
  border-radius: 8px;
  background-color: #93c2f5;

  @media (min-width: 768px) {
    margin: 24px 0;
  }
`
