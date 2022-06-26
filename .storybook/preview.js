import { Themes, themes } from '../src/themes'
import ThemeProviderDecorator from '../src/stories/ThemeProviderDecorator'

const themesArray = Object.keys(Themes)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'theme',
    defaultValue: Themes.Default,
    toolbar: {
      /**
       * You can check all available icons by this link:
       * https://storybook.js.org/docs/riot/workflows/faq#what-icons-are-available-for-my-toolbar-or-my-addon
       */
      icon: 'circlehollow',
      items: themesArray,
      // Should "Container size" be shown, or just the "circlehollow" icon
      showName: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    const theme = themes[context.globals.theme]
    return (
      <ThemeProviderDecorator theme={theme}>
        <Story />
      </ThemeProviderDecorator>
    )
  },
]
