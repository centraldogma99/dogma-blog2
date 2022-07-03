import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { PreviewTitle } from '../components/common/Typography'

export default {
  title: 'Typography',
  component: PreviewTitle,
} as ComponentMeta<typeof PreviewTitle>

export const Preview_Title: ComponentStory<typeof PreviewTitle> = args => (
  <PreviewTitle {...args}>미리보기 타이틀</PreviewTitle>
)
