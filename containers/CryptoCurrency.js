
import React, { Component } from 'react'
import CryptoCurrency from '../components/CryptoCurrency'
import { connect } from 'react-redux'
import { getCryptoCurrency } from '../redux/actions/index'

export default connect(
  (state, ownProps) =>( {
    cryptocurrency: state.cryptocurrency
  }),
  {onCryptoCurrency: () => getCryptoCurrency}
)(CryptoCurrency)