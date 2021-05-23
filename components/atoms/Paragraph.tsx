import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const StyledParagraph = styled.p`
  font-size: clamp(1em, 2vw, 2em);
  overflow: hidden;
`

const Paragraph = ({ children }: Props) => (
  <StyledParagraph>{children}</StyledParagraph>
)

export default Paragraph
