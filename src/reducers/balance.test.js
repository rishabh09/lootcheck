import * as constants from '../actions/constants'
import balanceReducer from './balance'

describe('balanceReducer', ()=> {

  it('should return balance', () => {
    const balance = 10
    expect(balanceReducer(undefined, {type: constants.SET_BALANCE, balance}))
      .toEqual(balance)
  })

  it('should deposit money to wallet', () => {
    const balance = 10
    const deposit = 15
    expect(balanceReducer(balance, {type: constants.DEPOSIT, deposit}))
      .toEqual(balance + deposit)
  })

  it('should withdraw money from wallet', () => {
    const balance = 50
    const withdraw = 20
    expect(balanceReducer(balance, {type: constants.WITHDRAW, withdraw}))
      .toEqual(balance - withdraw)
  })
})

