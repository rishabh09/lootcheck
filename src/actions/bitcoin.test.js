// https://api.coindesk.com/v1/bpi/currentprice/INR.json

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'

import {FETCH_BITCOIN} from './constants'
import {fetchBitcoin} from './bitcoin'

const createMockStore = configureMockStore([thunk])
const store = createMockStore({bitcoin: {}})

const mockResponse = { body: {bpi: 'bitcoin price index'} }

fetchMock.get('https://api.coindesk.com/v1/bpi/currentprice/INR.json', mockResponse)

it('creates an async action to fetch bitcoin value', () => {
  const expectedAction = [{type: FETCH_BITCOIN, bitcoin: mockResponse.body}]
  store.dispatch(fetchBitcoin()).then(() => {
    return expect(store.getActions()).toEqual(expectedAction)
  })
})
