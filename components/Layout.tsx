import { ReactChild, forwardRef } from 'react'
import Link from 'next/link'

import styled from 'styled-components'

import Logo from 'assets/svg/Logo'

type Props = {
  children: ReactChild
}

type StyledLogoProps = {
  className: string
  width: string
  height: string
  href?: string
}

const Container = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  padding-top: 2rem;
  position: sticky;
  justify-content: space-between;
  align-items: center;
  display: flex;
  flex: 0 0 100px;
`

const RenderLogo = forwardRef<HTMLAnchorElement, StyledLogoProps>(
  ({ className, href }, ref) => (
    <a href={href} ref={ref}>
      <Logo className={className} width="60" height="60" />
    </a>
  )
)

const StyledLogo = styled(RenderLogo)<StyledLogoProps>`
  stroke: ${(props) => props.theme.colors.primary};
`

const Layout = ({ children }: Props) => (
  <Container>
    <Header>
      <Link href="/" passHref>
        <StyledLogo className="" width="60" height="60" />
      </Link>
    </Header>
    {children}
  </Container>
)

export default Layout
