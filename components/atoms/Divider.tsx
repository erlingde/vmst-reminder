import styled from 'styled-components'

const StyledDivider = styled.div`
  height: 2px;
  border-bottom: 2px dashed ${(props) => props.theme.colors.primary};
  margin-top: 4em;
  margin-bottom: 1em;
`

const Divider = () => <StyledDivider />

export default Divider
