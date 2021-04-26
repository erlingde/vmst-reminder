import { FormEvent } from 'react'
import { Input } from 'rbx'

type Props = {
  size: Size
  placeholder: string
  onChange: (value: string) => void
}

type Size = 'small' | 'medium' | 'large' | undefined

const EmailInput = ({ size, placeholder, onChange }: Props) => (
  <Input
    size={size}
    type="email"
    placeholder={placeholder}
    onChange={(e: FormEvent<HTMLInputElement>) =>
      onChange(e.currentTarget.value)
    }
  />
)

export default EmailInput
