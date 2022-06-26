import '@emotion/react'
import '@emotion/styled'

declare module '@emotion/react' {
  export interface Theme {
    primary: string
    secondary: string
    background: string
    text: string
    button: {
      background: string
      hoverBackground: string
      hoverText: string
      text: string
    }
  }
}
