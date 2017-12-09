import React from 'react'
import {shallow} from 'enzyme'
import {Wallet} from './Wallet'

describe('wallet component', () => {
  const props = {balance: 20}
  const wallet = shallow(<Wallet {...props} />)
  it('should render wallet', () => {
    expect(wallet).toMatchSnapshot()
  })
  it('should display balance properly', () => {
    expect(wallet.find('.balance').text()).toEqual('Your Balance is 20')
  })
})
