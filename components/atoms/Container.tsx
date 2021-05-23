import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const StyledContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: clamp(15px, 5vw, 40px);
`

const Container = ({ children }: Props) => (
  <StyledContainer>{children}</StyledContainer>
)

export default Container
