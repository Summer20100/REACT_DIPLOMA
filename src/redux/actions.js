import { 
  INCREMENT, 
  DECREMENT, 
  INPUT_TEXT, 
  COMMENT_CREATE,
  FETCH_DATA_TOP,
  RECEIVE_DATA_TOP,
  FETCH_DATA_CATALOG,
  RECEIVE_DATA_CATALOG,
  FETCH_DATA_CATEGORIES,
  RECEIVE_DATA_CATEGORIES,
  FETCH_DATA_CATALOG_FILTER,
  RECEIVE_DATA_CATALOG_FILTER,
  FETCH_DATA_PRODUCT,
  RECEIVE_DATA_PRODUCT,
  FETCH_CART_ORDER,
  PUT_CART_ORDER,
  FETCH_ADD_PRODUCT,
  RECEIVE_ADD_PRODUCT,
  DELETE_ITEM,
  FETCH_DATA_PERSIST,
  ORDER_AMOUNT,
  CATALOG_AMOUNT,
  SEARCH_NAME
} from './types'

export function searchName(text) {
  return {
    type: SEARCH_NAME,
    peyload: text
  }
}


export function catalogAmount(amount) {
  return {
    type: CATALOG_AMOUNT,
    peyload: amount
  }
}

export function orderAmount(amount) {
  return {
    type: ORDER_AMOUNT,
    peyload: amount
  }
}

export function fetchDataPersist(data) {
  return {
    type: FETCH_DATA_PERSIST,
    data
  }
}

export function deleteItem(itemId) {
  return {
    type: DELETE_ITEM,
    peyload: itemId
  }
}

export function fetchAddProduct() {
  return {
    type: FETCH_ADD_PRODUCT,
  }
}

export function receiveAddProduct(data) {
  return {
    type: RECEIVE_ADD_PRODUCT,
    data
  }
}

export function incrementLikes() {
  return {
    type: INCREMENT
  }
}

export function decrementLikes() {
  return {
    type: DECREMENT
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    text
  }
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    data: { text, id }
  }
}

export function fetchDataTop() {
  return {
    type: FETCH_DATA_TOP,
  }
}

export function receiveDataTop(data) {
  return {
    type: RECEIVE_DATA_TOP,
    data
  }
}

export function fetchDataCatalog() {
  return {
    type: FETCH_DATA_CATALOG,
  }
}

export function receiveDataCatalog(data) {
  return {
    type: RECEIVE_DATA_CATALOG,
    data
  }
}

export function fetchDataCategories() {
  return {
    type: FETCH_DATA_CATEGORIES,
  }
}

export function receiveDataCategories(data) {
  return {
    type: RECEIVE_DATA_CATEGORIES,
    data
  }
}

export function fetchDataCatalogFilter() {
  return {
    type: FETCH_DATA_CATALOG_FILTER,
  }
}

export function receiveDataCatalogFilter(data) {
  return {
    type: RECEIVE_DATA_CATALOG_FILTER,
    data
  }
}

export function fetchDataProduct() {
  return {
    type: FETCH_DATA_PRODUCT,
  }
}

export function receiveDataProduct(data) {
  return {
    type: RECEIVE_DATA_PRODUCT,
    data
  }
}

export function fetchCardOrder() {
  return {
    type: FETCH_CART_ORDER,
  }
}

export function putCardOrder(data) {
  return {
    type: PUT_CART_ORDER,
    data
  }
}