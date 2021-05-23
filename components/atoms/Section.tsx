import { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children: ReactNode
}

const StyledGrid = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    & {
      gap: 40px;
    }
  }
`

const Section = ({ children }: Props) => <StyledGrid>{children}</StyledGrid>

export default Section
