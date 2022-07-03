import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Preview from '../components/Preview'

export default {
  title: 'Preview',
  component: Preview,
} as ComponentMeta<typeof Preview>

const Template: ComponentStory<typeof Preview> = args => (
  <Preview {...args}>미리보기 타이틀</Preview>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  title: '제목 들어감',
  description:
    '미리보기, 미리보기에 들어갈 내용을 적는 칸이다. 여러 줄의 텍스트가 들어갈 수도 있고, 그렇다.',
  tags: ['CULTURE', 'GLOBAL'],
  isHorizontal: true,
  imgSrc:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/440px-Cat_November_2010-1a.jpg',
}

export const Vertical = Template.bind({})
Vertical.args = {
  ...Horizontal.args,
  title: 'Preview_Vertical',
  isHorizontal: false,
}
