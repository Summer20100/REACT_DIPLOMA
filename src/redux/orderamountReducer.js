import { ORDER_AMOUNT } from './types'

const initialState = {
  length: 0
}

export const orderamountReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_AMOUNT:
      return {
        ...state,
        length: action.peyload
      }
    default:
      return state
  }
}

