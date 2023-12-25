import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { searchName, fetchDataCatalog, receiveDataCatalog } from './../../redux/actions'
import headerLogo from './../../img/header-logo.png'
import banner from './../../img/banner.jpg'
import { useNavigate } from "react-router-dom";
import Catalog from './../catalog/catalog';
import { searchnameReducer } from '../../redux/searchnameReducer'

const Header = (props) => {
  const [invisible, setIvisible] = useState(0)
  const [text, setText] = useState('')
  const [search, setSearch] = useState('')

  //let urlBase = 'https://reactdiploma.summer20100.repl.co/'
  let urlBase = import.meta.env.VITE_BASE

  const navigate = useNavigate();

  // console.log(navigate)

  // const storage = () => { setStorageLength(localStorage.length) }
  const [storageLength, setStorageLength] = useState(0)
  useEffect(() => {
    setStorageLength(localStorage.length);
  }, [urlBase]);

  const persistedState = useSelector(state => state)
  useEffect(() => {
    // console.log('persistedState>>>', persistedState.catalogReducer.data.length)
  }, [persistedState])
  
  // console.log("storageLength>>>", storageLength)

  const handleFilter = (ev) => {
    if ( invisible === 0 && text.length === 0 ) {
      setIvisible(1)
    } else  if (invisible === 1 && text.length > 0) {
      handleSubmit(ev)
      dispatch(searchName(search))
      setText('')
    }
    else {
      setIvisible(0)
    }
    // console.log(ev)
  }
  
  //let urlToFind = 'https://react-diploma-backend.onrender.com/api/items?q='
  let urlToFind = import.meta.env.VITE_TO_FIND
  //let urlCatalogItm = 'https://react-diploma-backend.onrender.com/api/items'
  let urlItems = import.meta.env.VITE_ITEMS
  
  const [urlFilter, setUrlFilter] = useState(urlItems)
  const [urlFind, setUrlFind] = useState('')

  // console.log("urlFilter>>>", urlFilter)


  
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(searchName(text))
  // }, [])

  const handleSubmit = (ev) => {
    // ev.preventDefault()
    // dispatch(searchName(search))
    // sendInformation()
    // console.log("handleSubmit")
    // dispatch(searchName(search))
    dispatch(searchName(text))
    ev.preventDefault()
    setIvisible(0)
    // setUrlFilter(urlToFind + text)
    // setUrlFind(urlToFind + text)
    setText('')
    navigate('/catalog')
  }

  // const name = useSelector(state => {
  //   // console.log("redux state", state)
  //   const { searchnameReducer } = state
  //   // console.log("searchnameReducer", searchnameReducer)
  //   return searchnameReducer.name
  // })

  // console.log("name>>>", name)

  // const sendInformation = () => {
  //   if (text.length > 0) {
  //     console.log( text )
  //   } else {
  //     setText('')
  //   }
  // }

  const storage = useSelector(state => {
    const { productAddReducer } = state
    return productAddReducer.data
  })

  const length = useSelector(state => {
    const { orderamountReducer } = state
    return orderamountReducer.length
  })

  // useEffect(() => {
  //   const length = useSelector(state => {
  //     const { orderamountReducer } = state
  //     return orderamountReducer.length
  //   })
  // },[length])

  // console.log("length>>>", length)

  // const catalogItm = useSelector(state => {
  //   const { catalogReducer } = state
  //   return catalogReducer.data
  // })

  // console.log('catalogItm>>>>', catalogItm)

  useEffect(() => {
    dispatch(fetchDataCatalog())
    fetch(urlFilter)
      .then((response) => response.json())
      .then((data) => {
        dispatch(receiveDataCatalog(data))
      })
  }, [urlFilter])

  const catalogItm = useSelector(state => {
    const { catalogReducer } = state
    return catalogReducer.data
  })

  console.log('catalogItmHeader >>>>', catalogItm)

  const handleKeyDown = (ev) => {
    console.log(ev)
    if (ev.key === 'Enter') {
      history.push('/resultats')
      consoloe.log('enter')
    }
  }

  const handleLink = () => {
    console.log('link >>>>')
    dispatch(searchName(''))
  }
  
  return (
    <>
      <header className="container">
        <div className="row">
          <div className="col">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
              <a className="navbar-brand" href="/">
                <img  src={ headerLogo } alt="Bosa Noga" />
              </a>
              <div className="collapse navbar-collapse justify-content-space-between" id="navbarMain">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">Главная</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/catalog" className="nav-link" onClick={ handleLink }>Каталог</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={ handleLink }>О магазине</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contacts" className="nav-link" onClick={ handleLink }>Контакты</Link>
                  </li>
                </ul>
                <div>
                  <div className="header-controls-pics">
                    { text.length > 0 ? 
                      (
                        <Link to="/catalog" className="nav-link">
                          <div 
                            data-id="search-expander" 
                            className="header-controls-pic header-controls-search" 
                            onClick={ handleSubmit }
                          ></div>
                        </Link>
                      ) 
                      : (
                        <div 
                          data-id="search-expander" 
                          className="header-controls-pic header-controls-search" 
                          onClick={ handleFilter }
                        ></div>
                      )
                    }
                          {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                    <Link to='/cart' onClick={ handleLink } >
                      <div className="header-controls-pic header-controls-cart">
                        { length !== 0 && <div className="header-controls-cart-full">{ length }</div> }
                        <div className="header-controls-cart-menu"></div>
                      </div>
                    </Link>
                  </div>
                  <form 
                    data-id="search-form" 
                    className="header-controls-search-form form-inline" 
                    style={{opacity: invisible }} 
                    onSubmit={ handleSubmit }
                  >
                    <input 
                      className="form-control"
                      style={{outline: 'none'}}
                      placeholder="Поиск" 
                      value={ text } 
                      onChange={(ev) => { 
                        setText(ev.target.value),
                        setSearch(urlToFind + ev.target.value) 
                      }}
                      onKeyPress={(ev) => handleKeyDown(ev)}
                    />
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      <main className="container">
        <div className="row">
          <div className="col">
            <div className="banner">
              <img src={ banner } className="img-fluid" alt="К весне готовы!" />
              <h2 className="banner-header">К весне готовы!</h2>
            </div>
          </div>
        </div>
      </main>
    </>  
  )
}

export default Header
