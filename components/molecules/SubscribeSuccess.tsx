import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import CardTitle from 'components/atoms/CardTitle'

type FAIconProps = {
  className?: string
}

const FAIcon = ({ className }: FAIconProps) => (
  <WrapperCenter>
    <FontAwesomeIcon
      icon={faCheckCircle}
      className={className}
      height="4em"
      width="4em"
    />
  </WrapperCenter>
)

const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
`

const StyledFAIcon = styled(FAIcon)`
  color: ${(props) => props.theme.colors.primary};
`

const StyledParagraph = styled.p`
  font-weight: 500;
  margin-top: ${(props) => props.theme.margin.xl};
`

const SubscribeSuccess = () => (
  <>
    <StyledFAIcon />
    <CardTitle title="Success!" />
    <StyledParagraph>
      You&apos;ve successfully subscribed to our awesome reminder!
    </StyledParagraph>
  </>
)

export default SubscribeSuccess
