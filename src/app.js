'use strict'

import React, { Component } from 'react'

import './css/style.css'

class App extends Component {
  constructor () {
    super()
    this.state = { title: '...' }
  }

  getTitle () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('My app with async / await!')
      }, 2000)
    })
  }

  async componentDidMount () {
    this.setState({
      title: await this.getTitle()
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    )
  }
}

export default App
