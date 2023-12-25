import { FETCH_DATA_CATALOG, RECEIVE_DATA_CATALOG, FETCH_DATA_CATALOG_FILTER, RECEIVE_DATA_CATALOG_FILTER } from './types'

const initialState = {
  data: [],
  loading: false
}

export const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_CATALOG:
      return {
        ...state,
        loading: false
      }
    case RECEIVE_DATA_CATALOG:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    case FETCH_DATA_CATALOG_FILTER:
      return {
        ...state,
        loading: false
      }
    case RECEIVE_DATA_CATALOG_FILTER:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    
    default:
      return state
  }
}

