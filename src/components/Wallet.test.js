import React from 'react'
import {shallow} from 'enzyme'
import {Wallet} from './Wallet'
import {withdrawMoney} from '../actions/balance'

describe('wallet component', () => {
  const mockDeposit = jest.fn()
  const mockWithdraw = jest.fn()
  const props = {balance: 20, depositMoney: mockDeposit, withdrawMoney: mockWithdraw}
  const wallet = shallow(<Wallet {...props} />)
  it('should render wallet', () => {
    expect(wallet).toMatchSnapshot()
  })
  it('should display balance properly', () => {
    expect(wallet.find('.balance').text()).toEqual('Your Balance is 20')
  })
  it('should display input box to enter value', () => {
    expect(wallet.find('.input-balance').exists()).toBe(true)
  })

  describe('when user enter value in input box', () => {
    const userBalance = '25'
    beforeEach(() => {
      wallet.find('.input-balance')
        .simulate('change', {target: {value: userBalance}})
    })

    it('should update the local state to component', () => {
      expect(wallet.state().balance).toEqual(parseInt(userBalance, 10))
    })

    describe('user clicks on deposit button', () => {
      beforeEach(() => {
        wallet.find('.btn-deposit').simulate('click')
      })

      it('calls the depositMoney props', () => {
        expect(mockDeposit).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })

    describe('user clicks on withdraw button', () => {
      beforeEach(() => {
        wallet.find('.btn-withdraw').simulate('click')
      })

      it('calls the withdrawMoney props', () => {
        expect(mockWithdraw).toHaveBeenCalledWith(parseInt(userBalance, 10))
      })
    })
  })
})
