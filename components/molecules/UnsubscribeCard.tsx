import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFrown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import CardTitle from 'components/atoms/CardTitle'
import { FadeIn } from 'components/atoms/Keyframes'

type FAIconProps = {
  className?: string
}

const FAIcon = ({ className }: FAIconProps) => (
  <WrapperCenter>
    <FontAwesomeIcon
      icon={faFrown}
      className={className}
      height="4em"
      width="4em"
    />
  </WrapperCenter>
)

const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margin.lg};
`

const StyledFAIcon = styled(FAIcon)`
  color: ${(props) => props.theme.colors.primary};
`

const StyledParagraph = styled.p`
  font-weight: 500;
  margin-top: ${(props) => props.theme.margin.xl};
  text-align: center;
  animation: ${FadeIn} 1.5s ease-in-out;
`

const Unsubscribe = () => (
  <>
    <StyledFAIcon />
    <CardTitle title="Sad to see you go!" />
    <StyledParagraph>
      All good things come to an end. You&apos;ve successfully unsubscribed.
    </StyledParagraph>
  </>
)

export default Unsubscribe
