import * as constants from './constants'

export const setBalance = balance => {
  return {
    type: constants.SET_BALANCE,
    balance
  }
}

export const depositMoney = deposit => {
  return {
    type: constants.DEPOSIT,
    deposit
  }
}

export const withdrawMoney = withdraw => {
  return {
    type: constants.WITHDRAW,
    withdraw
  }
}
