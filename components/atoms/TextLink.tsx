import styled from 'styled-components'

type Props = {
  href: string
  label: string
}

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  transform: translateX(-100%);
  transition: transform 0.5s ease-out;
  cursor: pointer;

  &::before {
    display: inline-block;
    cursor: pointer;
    content: attr(data-content);
    color: ${(props) => props.theme.colors.primary};
    transform: translateX(100%);
    transition: transform 0.5s ease-out;
    text-decoration: underline;
  }
`

const StyledAnchor = styled.a`
  position: relative;
  display: inline-block;
  color: #333;
  cursor: pointer;

  &:hover ${StyledSpan} {
    transform: translateX(0);

    &::before {
      transform: translateX(0);
    }
  }
`

const NextLink = ({ href, label }: Props) => (
  <StyledAnchor href={href}>
    <StyledSpan data-content={label} aria-hidden="true" />
    {label}
  </StyledAnchor>
)

export default NextLink
