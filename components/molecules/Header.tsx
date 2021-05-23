import { ReactNode } from 'react'

import Container from 'components/atoms/Container'

import Github from 'assets/svg/Github'

type Props = {
  children: ReactNode
}

const Header = ({ children }: Props) => (
  <header>
    <Container>{children}</Container>
    <Github
      height="80"
      width="80"
      href="https://github.com/erlingde/vmst-reminder"
    />
  </header>
)

export default Header
