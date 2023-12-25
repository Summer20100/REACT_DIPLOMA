import { fetchDataProduct, receiveDataProduct } from './../../redux/actions'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { fetchAddProduct, receiveAddProduct } from './../../redux/actions'


const Product = (props) => {
  const [count, setCount] = useState(1)
  
  //let urlPosition = 'https://react-diploma-backend.onrender.com/api/items/'
  let urlItems = import.meta.env.VITE_ITEMS

  const dispatch = useDispatch()
  const params = useParams()
  const { id } = params

  const position = useSelector(state => {
    const { productReducer } = state
    return productReducer.data
  })
  const images = useSelector(state => {
    const { productReducer } = state
    return productReducer.images
  })
  const sizes = useSelector(state => {
    const { productReducer } = state
    return productReducer.sizes
  })
  const positionloading = useSelector(state => {
    const { productReducer } = state
    return productReducer.loading
  })

  // const store01 = useSelector(state => {
  //   const { productAddReducer } = state
  //   return productAddReducer.data
  // })

  // console.log("store01>>>", store01)
  // useEffect(() => {
  //   dispatch(fetchAddProduct())
  // }, [dispatch])

  useEffect(() => {
    dispatch(fetchDataProduct())
    fetch(urlItems + id)
      .then((response) => response.json())
      .then((data) => dispatch(receiveDataProduct(data)))
  }, [dispatch])

  const { title, sku, manufacturer, color, material, season, reason, price } = position

  // const active = ({isActive}) => {isActive 
  //   ? 'selected' : 
  //   'menu__item' 
  // }

  // const [active, setActive] = useState('')
  // const click = () => {
  //   console.log('click')
  // }

  const [size, setSize] = useState('')
  
  // const [itmCart, setItmCart] = useState({
  //   id: '',
  //   title: '',
  //   size: '',
  //   count,
  //   totalPrice: '',
  //   price: ''
  // })

  // console.log(itmCart)
  
  // console.log(size)

  const increment = () => {
    setCount(count + 1)
    if ( count >= 10 ) return setCount(10)
  }

  const decrement = () => {
    setCount(count - 1)
    if ( count <= 1 ) return setCount(1)
  }

  let shopingBtn = true
  let available = 0
  sizes.map(el => { if (el.available) return available++ })
  sizes.length - available === 0 ? shopingBtn = false : shopingBtn = true

  // const local = () => {
  //   localStorage.setItem(id, JSON.stringify(itmCart))
  // }
  
  const addCart = () => {
    
    size && localStorage.setItem(id, JSON.stringify(
      {
        id,
        title,
        size,
        count,
        totalPrice: price * count,
        price
      }
    ));
    // size && dispatch(receiveAddProduct({
    //   id,
    //   title,
    //   size,
    //   count,
    //   price,
    //   totalPrice: price * count,
    // }))
  }

  // useEffect(() => {
  //   local()
  // }, [count])

  //localStorage.setItem(new Date().getTime(), JSON.stringify(itmCart));


  const [activeItem, setActiveItem] = useState();
  const handleClick = (el, ind) => {
    setActiveItem(ind)
    setSize(el)
  }

  console.log(activeItem)
  

  return (
    <div>
      <main className="container">
        <div className="row">
          <div className="col">
            <section className="catalog-item">
              <h2 className="text-center">{ title }</h2>
              <div className="row">
                <div className="col-5">
                  {/* <img src='' */}
                  <img src={ images.length === 1 ? images[0] : images[1] }
                    className="img-fluid" alt="" />
                </div>
                <div className="col-7">
                  <table className="table table-bordered">
                    <tbody>
                      <tr>
                        <td>Артикул</td>
                        <td>{ !sku ? '' : sku }</td>
                      </tr>
                      <tr>
                        <td>Производитель</td>
                        <td style={{textTransform: 'uppercase'}}>{ !manufacturer ? '' : manufacturer }</td>
                      </tr>
                      <tr>
                        <td>Цвет</td>
                        <td>{ !color ? '' : color }</td>
                      </tr>
                      <tr>
                        <td>Материалы</td>
                        <td>{ !material ? '' :  material }</td>
                      </tr>
                      <tr>
                        <td>Сезон</td>
                        <td>{ !season ? '' : season }</td>
                      </tr>
                      <tr>
                        <td>Повод</td>
                        <td>{ !reason ? '' : reason }</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="text-center">
                    <p>Размеры в наличии: 
                      { sizes.map((el, ind) => 
                        el.available && 
                        <Link  className='m-2'
                          //className={activeItem === ind ? 'nav-link active' : 'nav-link'}
                          //className={ isActive ? 'active' : '' } 
                          onClick={(ev) => handleClick(el.size, ind) }
                        >
                          <span 
                            className={activeItem === ind ? 'catalog-item-size selected' : 'catalog-item-size'}
                            //className="catalog-item-size selected"
                          >{ el.size }</span>
                        </Link> )}
                      {/* <span className="catalog-item-size selected">18 US</span> 
                      <span className="catalog-item-size">20 US</span> */}
                    </p>
                    { shopingBtn &&
                    <p>Количество: <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary" onClick={ decrement }>-</button>
                      <span className="btn-outline-secondary" style={{border: '1px solid #6c757d', width: '25px', fontWeight: '400'}}>{ count }</span>
                      <button className="btn btn-secondary" onClick={ increment }>+</button>
                    </span>
                    </p>
                    }
                    {/* <p>Количество: <span className="btn-group btn-group-sm pl-2">
                      <button className="btn btn-secondary" onClick={ decrement }>-</button>
                      <span className="btn btn-outline-primary">{ count }</span>
                      <button className="btn btn-secondary" onClick={ increment }>+</button>
                    </span>
                    </p> */}
                  </div>
                  { size && shopingBtn && 
                  <NavLink to='/cart'>
                    <button className="btn btn-danger btn-block btn-lg w-100" onClick={ addCart }>В корзину</button> 
                  </NavLink>
                  }
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Product
