import { FormEvent } from 'react'
import { Input } from 'rbx'

type Props = {
  onChange: (value: string) => void
}

type Size = 'small' | 'medium' | 'large' | undefined

const EmailInput = ({ onChange }: Props) => (
  <div className="form">
    <input
      type="text"
      name="email"
      required
      onChange={(e: FormEvent<HTMLInputElement>) =>
        onChange(e.currentTarget.value)
      }
    />
    <label htmlFor="email" className="label-email">
      <span className="content-email">E-mail</span>
    </label>
  </div>
)

export default EmailInput
