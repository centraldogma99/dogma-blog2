import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Button from '../components/common/Button'

export default {
  title: 'Atomic/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => (
  <Button {...args}>asdfa</Button>
)

export const Primary = Template.bind({})
Primary.args = {}
