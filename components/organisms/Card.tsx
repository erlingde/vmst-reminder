import { ReactNode } from 'react'
import styled, { css } from 'styled-components'

type Props = {
  front: ReactNode
  back?: ReactNode
}

type StyledCardProps = {
  success?: boolean
}

const StyledCard = styled.div<StyledCardProps>`
  max-width: 25em;
  min-height: 28em;
  height: 100%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 20px 20px 50px rgba(0, 0, 0, 0.5);
  transform-style: preserve-3d;
  position: relative;
  transition: transform 1s;
  border-radius: 15px;

  transform: ${(props) => props.success && 'rotateY(.5turn)'};

  @media screen and (max-width: ${(props) =>
      props.theme.breakpoints.tableLandscape}) {
    & {
      padding: 2rem;
      margin-bottom: 2em;
    }
  }
`

const CardStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  /* padding: 3rem; */
  padding: clamp(1rem, 5vw, 3rem);
  min-height: 28rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.phone}) {
    & {
      padding: 2rem;
      margin-bottom: 2em;
    }
  }
`

const Front = styled.div`
  ${CardStyles}
`

const Back = styled.div`
  ${CardStyles}
  transform: rotateY(.5turn);
  border-radius: 15px;
  background: white;
`

const Card = ({ front, back }: Props) => (
  <StyledCard>
    <Front>{front}</Front>
    {back ? <Back>{back}</Back> : null}
  </StyledCard>
)

export default Card
