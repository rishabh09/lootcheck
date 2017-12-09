import * as constants from './constants'
import * as actions from './balance'

it('creates an action to set balance', () => {
  const balance = 0
  const expectedResult = {type: constants.SET_BALANCE, balance}
  expect(actions.setBalance(balance)).toEqual(expectedResult)
})

it('creates an action to deposit to the wallet', () => {
  const deposit = 10
  const expectedResult = {type: constants.DEPOSIT, deposit}
  expect(actions.depositMoney(deposit)).toEqual(expectedResult)
})

it('creates an action to withdraw from wallet', () => {
  const withdraw = 10
  const expectedResult = {type: constants.WITHDRAW, withdraw}
  expect(actions.withdrawMoney(withdraw)).toEqual(expectedResult)
})