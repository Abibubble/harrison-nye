import styled from 'styled-components'
import styles from '../styles/styles'

export default function PageSection({ ...props }) {
  return <StyledPageSection>{props.children}</StyledPageSection>
}

const StyledPageSection = styled.div`
  padding: ${styles.spacer.small};
`
