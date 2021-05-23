import { ReactNode } from 'react'
import styled, { Keyframes } from 'styled-components'

type Props = {
  children: ReactNode
  animation: Keyframes
}

const StyledAnimate = styled.div<Props>`
  animation-duration: 1s;
  animation-name: ${(props) => props.animation};
  flex-basis: clamp(50%, 1vw, 100%);
  /* flex-basis: 50%; */

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.tableLandscape}) {
    & {
      flex-basis: 100%;
    }
  }
`

const Animate = ({ children, animation }: Props) => (
  <StyledAnimate animation={animation}>{children}</StyledAnimate>
)

export default Animate
