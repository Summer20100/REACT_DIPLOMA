import { DELETE_ITEM, FETCH_DATA_PERSIST } from './types'

const initialState =  {
  data: [
    // {
    //   category: 13,
    //   id: 13,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg"
    //   ],
    //   price: 12000,
    //   title: "Что то похожее на..... вно"
    // },
    // {
    //   category: 13,
    //   id: 73,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg"
    //   ],
    //   price: 12000,
    //   title: "Что то похожее на..... вно"
    // },
    // {
    //   category: 13,
    //   id: 65,
    //   images: [
    //     "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg"
    //   ],
    //   price: 12000,
    //   title: "Что то похожее на..... вно"
    // }
  ],
  // loadong: false
}


export const deleteReducer = (state = initialState, action) => {
    // console.log("action>>>", action)
    
    switch(action.type) {
      case DELETE_ITEM:
        const itemId = action.peyload
        // console.log(itemId)
        console.log('DELETE_ITEM', state.data.data)
        return {
          ...state, 
          data: state.data.data.filter(item => item.id !== itemId),
          // loading: true
        }
      case FETCH_DATA_PERSIST:
        console.log("FETCH_DATA_PERSIST", state.data.data)
        return {
          ...state,
          data: action.data,
          // loading: false
        }

      default:
        return state
      }
}