import { ComponentMeta } from '@storybook/react'
import React from 'react'

import TagButton from '../components/common/TagButton'

export default {
  title: 'TagButton',
  component: TagButton,
} as ComponentMeta<typeof TagButton>

export const Primary = () => <TagButton text="asdf" />
