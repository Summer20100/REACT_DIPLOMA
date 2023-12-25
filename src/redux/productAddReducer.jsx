import { FETCH_ADD_PRODUCT, RECEIVE_ADD_PRODUCT } from './types'

const initialState = {
  // data: [{
  //   id: '',
  //   title: '',
  //   size: '',
  //   count: 0,
  //   price: 0,
  //   totalPrice: 0
  // }],
  data: [],
  loading: false
}

export const productAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADD_PRODUCT:
      return {
        ...state,
        loading: false
      }
    case RECEIVE_ADD_PRODUCT:
      return {
        ...state,
        data: [...state.data, action.data],
        loading: true
      }    
    default:
      return state
  }
}

