import { CATALOG_AMOUNT } from './types'

const initialState = {
  length: 0
}

export const catalogamountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CATALOG_AMOUNT:
      console.log('CATALOG_AMOUNT>>>', action.peyload)
      return {
        ...state,
        length: action.peyload
      }
    default:
      return state
  }
}

