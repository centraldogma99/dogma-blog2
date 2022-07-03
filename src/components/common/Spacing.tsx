import { css } from '@emotion/react'
import styled from '@emotion/styled'

interface Props {
  size: number
  inline?: boolean
}

const normalStyle = (size: number) => css`
  height: ${size}px;
`

const inlineStyle = (size: number) => css`
  display: inline;
  width: ${size}px;
`

const Spacing = styled('div', {
  shouldForwardProp: prop => prop !== 'size',
})<Props>`
  flex-shrink: 0;
  ${({ inline, size }) => (inline ? inlineStyle(size) : normalStyle(size))}
`

export default Spacing
