import React, { Component } from 'react'

import Icon from '../assets/logo.png';
import '../styles/main.less'


export default class app extends Component {
  render() {
    return (
      <div>
        <img src={Icon} />
        <div className='item'>
            <p>hello webpack 4.0 </p>
        </div>
      </div>
    )
  }
}
