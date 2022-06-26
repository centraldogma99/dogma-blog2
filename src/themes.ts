import { Theme } from '@emotion/react'

export const Themes = {
  Default: 'Default',
  Dark: 'Dark',
} as const
export type Themes = typeof Themes[keyof typeof Themes]

export const themes: Record<Themes, Theme> = {
  Default: {
    primary: 'dodgerblue',
    secondary: '#000000',
    background: '#ffffff',
    text: '#000000',
    button: {
      background: '#000000',
      hoverBackground: '#ffffff',
      hoverText: '#333333',
      text: '#bbbbbb',
    },
  },
  Dark: {
    primary: 'hotpink',
    secondary: '#111111',
    background: '#333333',
    text: '#ffffff',
    button: {
      background: '#ffffff',
      hoverBackground: '#000000',
      hoverText: '#bbbbbb',
      text: '#000000',
    },
  },
}
