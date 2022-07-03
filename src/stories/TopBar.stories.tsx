import { ComponentMeta } from '@storybook/react'
import React from 'react'

import TagButton from '../components/common/TagButton'
import TopBar from '../components/Layout/TopBar'

export default {
  title: 'TopBar',
  component: TopBar,
} as ComponentMeta<typeof TopBar>

export const Primary = () => <TopBar />
