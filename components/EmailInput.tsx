import { FormEvent } from 'react'
import styled from 'styled-components'

type Props = {
  onChange: (value: string) => void
}

const Form = styled.div`
  position: relative;
  height: 60px;
  overflow: hidden;
`

const EmailText = styled.span`
  position: absolute;
  bottom: 5px;
  left: 0px;
  transition: transform 0.3s ease;

  &:after {
    transform: translateX(0%);
  }
`

const Label = styled.label`
  position: absolute;
  bottom: 0px;
  left: 0%;
  width: 100%;
  height: 100%;
  pointer-events: none;
  border-bottom: 1px solid #333;

  &:after {
    content: '';
    position: absolute;
    left: 0px;
    bottom: -1px;
    height: 100%;
    width: 100%;
    border-bottom: 3px solid ${(props) => props.theme.colors.primary};
    transform: translateX(-100%);
    transition: transform 0.3s ease;
  }
`

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-top: 10px;
  border: none;
  outline: none;
  background-color: transparent;

  &:focus + ${Label} ${EmailText}, &:valid + ${Label} ${EmailText} {
    transform: translateY(-100%);
    font-size: 14px;
    color: ${(props) => props.theme.colors.primary};
  }

  &:focus + ${Label}:after, &:valid + ${Label}:after {
    transform: translateX(0%);
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    box-shadow: 0 0 0 30px white inset !important;
  }
`

const EmailInput = ({ onChange }: Props) => (
  <Form>
    <Input
      type="text"
      name="email"
      required
      onChange={(e: FormEvent<HTMLInputElement>) =>
        onChange(e.currentTarget.value)
      }
    />
    <Label htmlFor="email">
      <EmailText className="emailtext">E-mail</EmailText>
    </Label>
  </Form>
)

export default EmailInput
