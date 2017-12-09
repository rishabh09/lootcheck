import React from 'react'
import {connect} from 'react-redux'

export class Wallet extends React.Component {
  render() {
    return(
        <div>
            <h3 className="balance">Your Balance is {this.props.balance}</h3>
        </div>
    )
  }
}

export default connect(state => {return {balance: state}}, null)(Wallet)