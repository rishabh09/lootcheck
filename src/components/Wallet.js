import React from 'react'
import {connect} from 'react-redux'
import {depositMoney, withdrawMoney} from '../actions/balance'
import {WITHDRAW} from '../actions/constants'

export class Wallet extends React.Component {
  constructor () {
    super()
    this.state = {balance: undefined}
  }

  updateBalance = e => this.setState({balance: parseInt(e.target.value, 10)})

  deposit = () => this.props.depositMoney(this.state.balance)
  withdraw = () => this.props.withdrawMoney(this.state.balance)
  render () {
    return (
      <div>
        <h3 className='balance'>Your Balance is {this.props.balance}</h3>
        <br />
        <input className='input-balance' onChange={this.updateBalance} />
        <button className='btn-deposit' onClick={this.deposit}>DEPOSIT</button>
        <button className='btn-withdraw' onClick={this.withdraw}>WITHDRAW</button>

      </div>
    )
  }
}

export default connect(state => { return {balance: state} }, {depositMoney, withdrawMoney})(Wallet)
