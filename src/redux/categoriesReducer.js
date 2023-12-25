import { FETCH_DATA_CATEGORIES, RECEIVE_DATA_CATEGORIES } from './types'

const initialState = {
  data: [],
  loading: false
}

export const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_CATEGORIES:
      return {
        ...state,
        loading: true
      }
    case RECEIVE_DATA_CATEGORIES:
      return {
        ...state,
        data: action.data,
        loading: false
      }
    default:
      return state
  }
}

