import { Typography } from 'antd'
import styled from 'styled-components'

const { Text } = Typography

export const TextWithIcon = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DocumentationText = styled(Text)`
  color: #777777;
  font-size: 10px;
`
