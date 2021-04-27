import { useState } from 'react'
import { Field, Control, Level, Column } from 'rbx'
import * as EmailValidator from 'email-validator'
import axios from 'axios'

// import { Button } from 'components/atoms'
import EmailInput from 'components/atoms/EmailInput'
import Button from 'components/atoms/Button'

type Props = {
  displayToast: {
    error: (label: string) => void
    success: (label: string) => void
  }
}

const Form = ({ displayToast }: Props) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // eslint-disable-next-line consistent-return
  const handleSubscribe = async () => {
    if (EmailValidator.validate(email)) {
      setIsLoading(true)
      try {
        await axios.post('/api/subscribe', { email })
      } catch {
        setIsLoading(false)
        return displayToast.error('Invalid e-mail address!')
      }
      setIsLoading(false)
      setSuccess(true)
      displayToast.success('Success!')
    } else {
      displayToast.error('Invalid e-mail address!')
    }
  }

  return (
    <Field>
      <EmailInput onChange={setEmail} />
      <Level>
        <Level.Item>
          <Button
            onClick={() => handleSubscribe()}
            disabled={isLoading || success}
            title="Subscribe"
            isLoading={isLoading}
            success={success}
          />
        </Level.Item>
      </Level>
    </Field>
  )
}

export default Form
