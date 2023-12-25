import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Input from 'react-phone-number-input/input'
import { deleteItem, fetchDataPersist, orderAmount } from '../../redux/actions'
import { useDispatch, useSelector } from "react-redux"

const Cart = (props) => {
  const dispatch = useDispatch()

  let store = []
  const [storageLength, setStorageLength] = useState(localStorage.length)

  const [order, setOrder] = useState([])
  const [ordered, setOrdered] = useState(false)
  const [telNum, setTelNum] = useState('')
  const [adres, setAdres] = useState('')
  const [adresSaver, setAdresSaver] = useState('')
  const [totalAllSaver, setTotalAllSaver] = useState(0)
  const [active, isActive] = useState(true)
    
  for ( let i = 0; i < storageLength; i++ ) {
    store.push( localStorage.getItem(localStorage.key(i)) )
  }

  const [itemsOrder, setItemsOrder] = useState([])
  useEffect(() => {
    const storedItems = store.map(el => JSON.parse(el)) || [];
    setItemsOrder(storedItems);
  }, [storageLength]);

  const deleteItm = (key) => {
    localStorage.removeItem(key)
    setStorageLength(localStorage.length)
    dispatch(deleteItem(key))
  }

  const total = itemsOrder.map(el => { return el.totalPrice })
  const totalAll = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

  const storage = useSelector(state => {
    const { productAddReducer } = state
    return productAddReducer.data
  })
  
  useEffect(() => {
    setStorageLength(localStorage.length);
  }, []);
  // console.log(storageLength)

  useEffect(() => {
    dispatch(orderAmount(localStorage.length))
  }, [storageLength]);
  

  
  const persistedState = useSelector(state => state.productAddReducer)
  useEffect(() => {
    // console.log("persistedState>>>", persistedState)
    dispatch(fetchDataPersist(persistedState))
  }, [persistedState])

  // console.log(persistedState)


  let setOfItems = itemsOrder.map((el,ind) => {
    return(
      <tr>
        <td scope="row">{ ind + 1 }</td>
        <td><Link to={ '/catalog/' + el.id }>{ el.title }</Link></td>
        <td>{ el.size }</td>
        <td>{ el.count }</td>
        {/* <td>{ el.totalPrice.toLocaleString('ru') } руб.</td> */}
        <td>{ el.price } руб.</td>
        <td>{ el.totalPrice } руб.</td>
        <td><button class="btn btn-outline-danger btn-sm" onClick={() => deleteItm(el.id) }>Удалить</button></td>
      </tr>
    )
  })

  let items = itemsOrder.map(el =>  {
    return ({
        "id": el.id,
        "price": el.totalPrice,
        "count": el.count
      })
  })

  let urlOrder = import.meta.env.VITE_ORDER

  const handleSend = (ev) => {
    if (active && adres &&  telNum) {
      ev.preventDefault()
      fetch(urlOrder, {
        method: 'POST',
        body: active && JSON.stringify({
          owner: {
            phone: telNum,
            address: adres,
          },
          items
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        })
         .then((response) => {
            if (!response.ok) {
              throw new Error("Отправлено")
            }       
            return response.json()
         })
         .then((data) => {
            console.log(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
      setOrdered(true)
      
    }
    setTotalAllSaver(totalAll)
    setAdresSaver(adres)
    setItemsOrder([])
    setTelNum('')
    setAdres('')
    isActive(false)
    localStorage.clear()
  }

  const handleActive = (ev) => {
    isActive(ev.target.checked)
  }

  const length = useSelector(state => {
    const { orderamountReducer } = state
    return orderamountReducer.length
  })

  console.log(length)

  // console.log('ordered >>>', ordered)
  
  return (
    <main class="container">
        <div class="row">
          <div class="col">
            <section class="cart">
              <h2 class="text-center">Корзина</h2>
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Название</th>
                    <th scope="col">Размер</th>
                    <th scope="col">Кол-во</th>
                    <th scope="col">Стоимость</th>
                    <th scope="col">Итого</th>
                    <th scope="col">Действия</th>
                  </tr>
                </thead>
                <tbody>
                  { setOfItems }
                  <tr>
                    <td colspan="5" class="text-right">Общая стоимость</td>
                    {/* <td>{ totalAll.toLocaleString('ru') } руб.</td> */}
                    <td>{ totalAll } руб.</td>
                  </tr>
                </tbody>
              </table>
            </section>
            <section class="order">
              <h2 class="text-center">Оформить заказ</h2>
              { !ordered 
                ? <>
              
                    <div class="card" style={{ maxWidth: '30rem', margin: '0 auto'}} >
                
                      <form class="card-body" >
                        <div class="form-group">
                          <label for="phone">Телефон</label>
                          {/* <input defaultCountry="RU" class="form-control" type='tel' id="phone" value={ telNum } placeholder="Ваш телефон" onChange={(ev) => setTelNum(ev.target.value) } required/> */}
                          <Input
                            class="form-control"
                            country="RU"
                            international
                            withCountryCallingCode
                            value={telNum}
                            onChange={setTelNum}
                            required
                          />
                         </div>
                  
                        <div class="form-group">
                          <label for="address">Адрес доставки</label>
                          <input class="form-control" id="address" value={ adres } placeholder="Адрес доставки" onChange={(ev) => {setAdres(ev.target.value), console.log(validationMessage) }} required />
                        </div>

                        <div class="form-group form-check">
                          <input 
                            type="checkbox" 
                            checked={ active } 
                            class="form-check-input" 
                            id="agreement" 
                            onClick={ handleActive } 
                            required
                          />
                          <label class="form-check-label" for="agreement">Согласен с правилами доставки</label>
                        </div>
                        <button 
                          type="submit" 
                          class="btn btn-outline-secondary" 
                          onClick={(ev) => handleSend(ev) }
                        >Оформить</button>
                      </form>
                    </div>
                  </>                    
                : <div class="alert alert-success" role="alert">Ваш товар на сумму { totalAllSaver } р.  отправлен по адресу: <h3>{ adresSaver }</h3> Посоветуйте друзьям и закажите ещё!</div>
              }
            </section>
          </div>
        </div>
      </main>
  )
}

export default Cart