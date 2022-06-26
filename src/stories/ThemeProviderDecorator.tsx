import { Theme, ThemeProvider } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'

interface Props {
  theme: Theme
}

const ThemeProviderDecorator = ({
  theme,
  children,
}: React.PropsWithChildren<Props>) => {
  return (
    <ThemeProvider theme={theme}>
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  position: relative;
  padding: 3rem;
  background-color: ${({ theme }) => theme.background};
`

export default ThemeProviderDecorator
