import styled from 'styled-components'

import { slideInFromLeft, bounce } from 'components/atoms/Keyframes'

type Props = {
  primary: string
  secondary: string
}

const StyledHeading = styled.h1`
  animation-name: ${slideInFromLeft};
  animation-duration: 1s;
  font-weight: 800;

  & :nth-child(1) {
    display: inline-block;
  }

  & :nth-child(1):after {
    content: '';
    display: block;
    position: relative;
    bottom: clamp(8px, 1vw, 12px);
    background: ${(props) => props.theme.colors.primary};
    width: 76%;
    height: clamp(2px, 0.3vw, 5px);
    z-index: -1;
    border-radius: 5px;
  }
`

const Dot = styled.span`
  animation: ${bounce} 1s ease-out;
  animation-delay: 1s;
  position: absolute;
`

const Heading = ({ primary, secondary }: Props) => (
  <>
    <StyledHeading>
      <div>{primary}</div>{' '}
      <div>
        {secondary}
        <Dot>.</Dot>
      </div>
    </StyledHeading>
  </>
)

export default Heading
