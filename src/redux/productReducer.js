import { FETCH_DATA_PRODUCT, RECEIVE_DATA_PRODUCT } from './types'

const initialState = {
  data: [],
  images: [],
  sizes: [],
  loading: false
}

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PRODUCT:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_DATA_PRODUCT:
      return {
        ...state,
        data: action.data,
        images: action.data.images,
        sizes: action.data.sizes,
        loading: false
      }
    default:
      return state
  }
}

