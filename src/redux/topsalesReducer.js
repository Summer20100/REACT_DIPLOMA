import { FETCH_DATA_TOP, RECEIVE_DATA_TOP } from './types'
import getData from './getData.jsx'

const initialState = {
  data: [],
  loading: false
}

let urlTopsalesItm = 'https://react-diploma-backend.onrender.com/api/top-sales'

export const topSalesReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_TOP:
      return {
        ...state,
        loading: false
      }
    case RECEIVE_DATA_TOP:
      return {
        ...state,
        data: action.data,
        loading: true
      }
    default:
      return state
  }
}

