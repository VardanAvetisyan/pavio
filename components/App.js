import React, { Component } from 'react'
import CryptoCurrency from '../containers/CryptoCurrency'

export default class App extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h2>Crypto Currency Application</h2>
        <h6 style={{color:'red'}}>For Detailed information of currency click on Detailed info button</h6>
        <CryptoCurrency />
      </div>
    )
  }
}