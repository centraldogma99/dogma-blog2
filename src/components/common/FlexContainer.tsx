import styled from '@emotion/styled'
import React from 'react'
import { CSSProperties } from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties['flexDirection']
  verticalAlign?: CSSProperties['alignItems']
  horizontalAlign?: CSSProperties['justifyContent']
}

// const FlexContainer = ({
//   direction = 'row',
//   verticalAlign = 'center',
//   horizontalAlign = 'center',
//   children,
//   ...rest
// }: Props) => {
//   return (
//     <Container
//       {...rest}
//       direction={direction}
//       verticalAlign={verticalAlign}
//       horizontalAlign={horizontalAlign}
//     >
//       {children}
//     </Container>
//   )
// }

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction ?? 'row'};
  align-items: ${({ verticalAlign }) => verticalAlign ?? 'center'};
  justify-content: ${({ horizontalAlign }) => horizontalAlign ?? 'center'};
`

export default FlexContainer
