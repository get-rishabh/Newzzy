import React, { Component } from 'react'
import loading from './Spinning arrows.gif'

export default class Spinner extends Component {
  render() {
    return (
      <img src={loading} alt='Loading...' width={50} />
    )
  }
}
