import styled from 'styled-components'

type Props = {
  title: string
}

const Title = styled.h2`
  font-weight: 600;
  text-align: center;
`

const CardTitle = ({ title }: Props) => <Title>{title}</Title>

export default CardTitle
