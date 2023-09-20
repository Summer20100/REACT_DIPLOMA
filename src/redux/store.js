import { createStore } from 'redux'

const initialState = {
  category: 13,
  id: 20,
  images: [
    "https://raw.githubusercontent.com/netology-code/ra16-diploma/master/html/img/products/pharrell_williams_sneakers.jpg"
  ],
  price: 12000,
  title: "Что то похожее на..... вно"
}
  

const reducer = (state = initialState, action) => {
  console.log('reducer:', action)

  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        price: state.price + 1000
      }
    case 'DECREMENT':
      return {
        ...state,
        price: state.price - 100
      }
    default:
      return state
  }
}

const store = createStore(reducer)

export default store