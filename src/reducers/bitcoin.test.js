import {FETCH_BITCOIN} from '../actions/constants'
import bitcoinReducer from './bitcoin'

describe('bitcoinReducer', () => {
  const bitCoinData = {bpi: 'bitcoin price index'}
  it('should return bitcoin data', () => {
    expect(bitcoinReducer({}, {type: FETCH_BITCOIN, bitcoin: bitCoinData}))
      .toEqual(bitCoinData)
  })
})
