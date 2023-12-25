import { FETCH_CART_ORDER, PUT_CART_ORDER } from './types'

const initialState = {
  data: [{
    owner: {
      phone: '',
      address: '',
    },
    items: [
      {
        id: '',
        price: '',
        count: ''
      }
    ]
  }],
  loading: false
}

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CART_ORDER:
      return {
        ...state,
        loading: false
      }
    case PUT_CART_ORDER:
      return {
        ...state,
        data: action.data,
        loading: true
      }    
    default:
      return state
  }
}

