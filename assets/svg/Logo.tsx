import styled from 'styled-components'

import { Alert } from 'components/atoms/Keyframes'

type Props = {
  width: string
  height: string
  color: string
}

const StyledLogo = styled.svg`
  overflow: visible;

  &:hover #RightLine,
  &:focus #RightLine,
  &:hover #LeftLine,
  &:focus #LeftLine {
    animation: ${Alert} 0.5s linear;
  }
`

const Logo = ({ width, height, color }: Props) => (
  <StyledLogo
    width={width}
    height={height}
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke={color}
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
    <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
    <path id="RightLine" d="M21 6.727a11.05 11.05 0 0 0 -2.794 -3.727" />
    <path id="LeftLine" d="M3 6.727a11.05 11.05 0 0 1 2.792 -3.727" />
  </StyledLogo>
)

export default Logo
