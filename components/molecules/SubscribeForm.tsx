import { useState, useContext } from 'react'
import * as EmailValidator from 'email-validator'
import axios from 'axios'
import styled, { ThemeContext } from 'styled-components'

import EmailInput from 'components/atoms/EmailInput'
import Button from 'components/atoms/Button'
import CardTitle from 'components/atoms/CardTitle'

import displayToast from 'utils/displayToast'

import Email from 'assets/svg/Email'

const EmailWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const StyledParagraph = styled.p`
  font-weight: 500;
  padding-bottom: 1em;
  position: relative;
  text-align: center;
`

const Form = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const themeContext = useContext(ThemeContext)

  const handleSubscribe = async () => {
    if (EmailValidator.validate(email)) {
      setIsLoading(true)
      try {
        await axios.post('/api/subscribe', { email })
      } catch (e) {
        setIsLoading(false)
        displayToast().error('Invalid e-mail address!')
        return
      }
      setIsLoading(false)
      setSuccess(true)
    } else {
      displayToast().error('Invalid e-mail address!')
    }
  }

  return (
    <>
      <EmailWrapper>
        <Email width="44" height="44" color={themeContext.colors.primary} />
      </EmailWrapper>
      <CardTitle title="Become a subscriber" />
      <EmailInput onChange={setEmail} />
      <Button
        onClick={() => handleSubscribe()}
        disabled={isLoading || success}
        title="Subscribe"
        isLoading={isLoading}
        success={success}
      />
      <StyledParagraph>
        We do not share or sell your information!
      </StyledParagraph>
    </>
  )
}

export default Form
