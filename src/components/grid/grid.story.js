'use strict'

import React, { Component } from 'react'
import { storiesOf } from '@kadira/storybook'
import { Container, Row, Column } from './index'

const stories = storiesOf('Grid', module).addDecorator((story) => (
  <div style={{ padding: 30 }}>
    {story()}
  </div>
))

const addStory = (title, story) => (
  stories.addWithInfo(title, story, { inline: true, header: false })
)

const WithBackground = (Wrapper) => {
  class WithBackground extends Component {
    render () {
      const { style: styleProp, ...props } = this.props
      const style = {
        ...styleProp,
        background: '#ddd',
        marginBottom: 10,
        padding: '3px 12px'
      }

      return (
        <Wrapper style={style} {...props} />
      )
    }
  }

  WithBackground.displayName = typeof Wrapper === 'string'
    ? `WithBackground(${Wrapper})`
    : `WithBackground(${Wrapper.name})`

  return WithBackground
}

const ContentWithBg = WithBackground('div')

addStory('Default container structure - all available column sizes', () => (
  <Container>
    <Row>
      <Column size={10}>
        <ContentWithBg>10%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={20}>
        <ContentWithBg>20%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={25}>
        <ContentWithBg>25%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={33}>
        <ContentWithBg>33%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={34}>
        <ContentWithBg>34%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={50}>
        <ContentWithBg>50%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={66}>
        <ContentWithBg>66%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={67}>
        <ContentWithBg>67%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={75}>
        <ContentWithBg>75%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={80}>
        <ContentWithBg>80%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column size={90}>
        <ContentWithBg>90%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column>
        <ContentWithBg>100%</ContentWithBg>
      </Column>
    </Row>
  </Container>
))

addStory('Two columns', () => (
  <Container>
    <Row>
      <Column>
        <ContentWithBg>50%</ContentWithBg>
      </Column>
      <Column>
        <ContentWithBg>50%</ContentWithBg>
      </Column>
    </Row>
  </Container>
))

addStory('Offset', () => (
  <Container>
    <Row>
      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column size={50} offset={10}>
        <ContentWithBg>Column 50% and Offset 10%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column size={50} offset={25}>
        <ContentWithBg>Column 50% and Offset 25%</ContentWithBg>
      </Column>
    </Row>

    <Row>
      <Column>
        <ContentWithBg>Column</ContentWithBg>
      </Column>

      <Column offset={10}>
        <ContentWithBg>Offset 10%</ContentWithBg>
      </Column>
    </Row>
  </Container>
))
