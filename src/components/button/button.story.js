'use strict'

import React from 'react'
import { storiesOf, action } from '@kadira/storybook'
import Button from './index'

const stories = storiesOf('Button', module).addDecorator((story) => (
  <div style={{ padding: 30 }}>
    {story()}
  </div>
))

const addStory = (title, story) => (
  stories.addWithInfo(title, story, { inline: true, header: false })
)

addStory('Default button', () => (
  <Button onClick={action('button click')}>Default button</Button>
))

addStory('Outlined button', () => (
  <Button kind='outline'>
    Outlined button
  </Button>
))

addStory('Clear button', () => (
  <Button kind='clear'>
    Clear button
  </Button>
))

addStory('Anchor as button (just add "href" prop)', () => (
  <Button href='https://github.com'>
    Anchor as button
  </Button>
))
