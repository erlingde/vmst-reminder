import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import { Rotate } from 'components/atoms/Keyframes'

type FAIconProps = {
  className?: string
}

const WrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${(props) => props.theme.margin.lg};
`

const IconCenter = styled(WrapperCenter)`
  height: 180px;
  margin-bottom: ${(props) => props.theme.margin.lg};
`

const FASpinner = ({ className }: FAIconProps) => (
  <IconCenter>
    <FontAwesomeIcon
      icon={faSpinner}
      className={className}
      height="4em"
      width="4em"
    />
  </IconCenter>
)

const StyledFASpinner = styled(FASpinner)`
  color: ${(props) => props.theme.colors.primary};
  animation: ${Rotate} 1s linear infinite;
`

const LoadingSpinner = () => <StyledFASpinner />

export default LoadingSpinner
