import { Button as RbxButton, Loader } from 'rbx'

type Props = {
  onClick: () => void
  disabled: boolean
  isLoading: boolean
  title: string
}

const Button = ({ onClick, disabled, isLoading, title }: Props) => (
  <RbxButton
    color="info"
    outlined
    onClick={() => onClick()}
    disabled={disabled}
  >
    {isLoading ? <Loader /> : title}
  </RbxButton>
)

export default Button
