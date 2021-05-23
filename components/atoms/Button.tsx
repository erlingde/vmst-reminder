/* eslint-disable no-nested-ternary */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styled, { css } from 'styled-components'

import { Rotate } from 'components/atoms/Keyframes'

type Props = {
  onClick: () => void
  disabled: boolean
  isLoading: boolean
  title: string
  success: boolean
}

type FAIconProps = {
  className?: string
  spinner?: boolean
  icon: IconProp
}

const Button = styled.button`
  position: relative;
  display: block;
  margin: 2rem auto;
  width: 100%;
  max-width: 10rem;
  height: 3rem;
  border-radius: 20px;
  cursor: pointer;
  background: none;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.primary};
  transition: color 0.8s;
  z-index: 1;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: white;
    transform: translateY(-7px);
    box-shadow: 0px 15px 20px rgb(0, 118, 95, 0.4);

    &:before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.primary};
    z-index: -1;
    transition: transform 0.8s;
    transform: scaleX(0);
    transform-origin: right;
    will-change: transform;
    transform: ${(props) => props.disabled && 'scaleX(1)'};
    transform-origin: ${(props) => props.disabled && 'left'};
  }

  cursor: ${(props) => props.disabled && 'not-allowed'};
  color: ${(props) => props.disabled && 'white'};
`

const FAIcon = ({ className, icon }: FAIconProps) => (
  <FontAwesomeIcon icon={icon} className={className} />
)

const StyledFAIcon = styled(FAIcon)<FAIconProps>`
  width: 2rem;
  animation: ${(props) =>
    props.spinner &&
    css`
      ${Rotate} 1.5s linear infinite
    `};
`

const SubscribeButton = ({
  onClick,
  disabled,
  isLoading,
  title,
  success,
}: Props) => (
  <Button type="button" disabled={disabled} onClick={() => onClick()}>
    {success ? (
      <StyledFAIcon icon={faCheckCircle} />
    ) : isLoading ? (
      <StyledFAIcon icon={faSpinner} spinner />
    ) : (
      title
    )}
  </Button>
)

export default SubscribeButton
