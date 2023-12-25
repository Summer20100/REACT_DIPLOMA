import { SEARCH_NAME } from './types'

const initialState = {
  name: ''
}

export const searchnameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NAME:
      // console.log('action.payload', action.peyload)
      return {
        ...state,
        name: action.peyload
      }
    default:
      return state
  }
}

