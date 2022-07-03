import '@fontsource/noto-sans-kr'

import { css, Global } from '@emotion/react'
import React from 'react'

export default function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Global
        styles={css`
          body {
            font-family: 'Noto Sans KR', sans-serif;
            font-size: 2rem;
            margin: 0;
          }
        `}
      />
      {children}
    </>
  )
}
