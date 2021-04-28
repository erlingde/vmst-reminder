/* eslint-disable no-nested-ternary */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

type Props = {
  onClick: () => void
  disabled: boolean
  isLoading: boolean
  title: string
  success: boolean
}

const Button = ({ onClick, disabled, isLoading, title, success }: Props) => (
  <button
    className={`btn ${success ? 'btn-disabled' : ''}`}
    type="button"
    disabled={disabled}
    onClick={() => onClick()}
  >
    {success ? (
      <FontAwesomeIcon icon={faCheckCircle} className="btn-icon" />
    ) : isLoading ? (
      <FontAwesomeIcon icon={faSpinner} className="btn-icon btn-spinner" />
    ) : (
      title
    )}
  </button>
)

export default Button
