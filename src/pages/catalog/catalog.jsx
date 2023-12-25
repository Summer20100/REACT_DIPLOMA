
// import CatalogSet from '../mainloaded/components/catalogset'
import { Link } from 'react-router-dom'
import Itm from '../mainloaded/components/itm'
import { fetchDataCatalog, receiveDataCatalog, fetchDataCategories, receiveDataCategories, fetchDataCatalogFilter, receiveDataCatalogFilter, catalogAmount, searchName } from './../../redux/actions'
import Categories from '../mainloaded/components/categories'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"


const Catalog = (props) => {
  //let urlCatalogItm = 'https://react-diploma-backend.onrender.com/api/items'
  let urlItems = import.meta.env.VITE_ITEMS
  //let categoriesUrl = 'https://react-diploma-backend.onrender.com/api/categories'
  let urlCategories = import.meta.env.VITE_CATEGORIES

  //let urlFilterBase = 'https://react-diploma-backend.onrender.com/api/items?categoryId='
  let urlFilterBase = import.meta.env.VITE_FILTER_BASE
  //let urlDownloadMoreBase = 'https://react-diploma-backend.onrender.com/api/items?offset='
  let urlDownloadMoreBase = import.meta.env.VITE_DOWN_LOAD_MORE_BASE

  //let urlDownloadMoreCategoriesBase01 = 'https://react-diploma-backend.onrender.com/api/items?categoryId='
  let urlDownloadMoreCategoriesBase01 = import.meta.env.VITE_DOWN_LOAD_MORE_CATEGORIES_BASE01

  //let urlDownloadMoreCategoriesBase02 = '&offset='
  let urlDownloadMoreCategoriesBase02 = import.meta.env.VITE_DOWN_LOAD_MORE_CATEGORIES_BASE02

  // let urlFind = 'https://react-diploma-backend.onrender.com/api/items?q=Туфли принцессы'
  // let urlFindImems01 = 'https://react-diploma-backend.onrender.com/api/items?q=Туфли&offset=6&categoryId=13'

  //let urlFindImems01 = 'https://react-diploma-backend.onrender.com/api/items?q='
  //let urlFindImems02 = '&offset='
  //let urlFindImems03 = '&categoryId='
  //let urlToFind = 'https://react-diploma-backend.onrender.com/api/items?q='

  let urlFindImems01 = import.meta.env.VITE_FIND_ITEMS01
  let urlFindImems02 = import.meta.env.VITE_FIND_ITEMS02
  let urlFindImems03 = import.meta.env.VITE_FIND_ITEMS03
  let urlToFind = import.meta.env.VITE_TO_FIND

  const [urlFilter, setUrlFilter] = useState(urlItems)
  const [urlFind, setUrlFind] = useState('')
  const [idCategories, setIdCategories] = useState('')
  const [count, setCount] = useState(6)
  const [text, setText] = useState('')
  const [length, setLength] = useState('')

  const dispatch = useDispatch()

  // CATALOG

  const catalogItm = useSelector(state => {
    const { catalogReducer } = state
    return catalogReducer.data
  })

  const catalogloading = useSelector(state => {
    const { catalogReducer } = state
    return catalogReducer.loading
  })

  useEffect(() => {
    dispatch(fetchDataCatalog())
    fetch(urlFilter)
      .then((response) => response.json())
      .then((data) => {
        dispatch(receiveDataCatalog(data))
      })
  }, [urlFilter])

  // CATEGORIES

  const categories = useSelector(state => {
    const { categoriesReducer } = state
    return categoriesReducer.data
  })

  // console.log(categories)

  const categoriesLoading = useSelector(state => {
    const { categoriesReducer } = state
    return categoriesReducer.loading
  })

  useEffect(() => {
    dispatch(fetchDataCategories())
    fetch(urlCategories)
      .then((responce) => responce.json())
      .then((data) => dispatch(receiveDataCategories(data)))
  }, [urlCategories])


  const onFilter = (id) => {
    setIdCategories(id)
    if (length.length !== 0) {
      setUrlFilter(urlFind + urlFindImems03 + id)
    }
    else {
      setUrlFilter(urlFilterBase + id)
    }
    setCount(0)
  }

  const downloadMoreCategoriesItem = (ev) => {
    if (length.length !== 0) {
      setUrlFilter(urlFind + urlFindImems02 + count + urlFindImems03 + idCategories)
    } else {
      setUrlFilter(urlDownloadMoreCategoriesBase01 + idCategories + urlDownloadMoreCategoriesBase02 + count)
    }
  }

  const name = useSelector(state => {
    const { searchnameReducer } = state
    return searchnameReducer.name
  })

  const handleChange = (ev) => {
    setText(ev.target.value)
  }
  
  useEffect(() => {    
    setText(name)
    setUrlFilter(urlToFind + name)
    setUrlFind(urlToFind + name)
    setText('')
  }, [name])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setUrlFilter(urlToFind + text)
    setUrlFind(urlToFind + text)
    setText('')
  }

  useEffect(() => {
    fetch(urlFind)
      .then((response) => response.json())
      .then((data) => setLength(data))
  }, [urlFind])

  const setCatalogItm = catalogItm.map((el, ind) => <Itm key={el.id} {...el} />)
  const setCategories = categories.map((el, ind) => <Categories key={el.id} {...el} onFilter={onFilter} ind={ ind }/>)

  useEffect(() => {
    dispatch(catalogAmount(setCatalogItm.length))
  }, [])

  const [activeItem, setActiveItem] = useState(0);
  const handleItemClick = (index) => { setActiveItem(index) };

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            <form className="catalog-search-form form-inline" onSubmit={handleSubmit}>
              <input onChange={(ev) => handleChange(ev)} className="form-control" value={text} placeholder="Поиск" />
            </form>
            { catalogloading 
            ? <>
              <ul className="catalog-categories nav justify-content-center">
                <li className="nav-item" onClick={() => handleItemClick(0)} >
                  <Link className={activeItem === 0 ? 'nav-link active' : 'nav-link'}
                    onClick={ev => {
                      setUrlFilter(urlItems),
                      setIdCategories(0),
                      setCount(0)
                    }}
                  >Все</Link>
                </li>
                { categories.map((el, ind) => {
                  return (
                    <li className="nav-item" onClick={() => handleItemClick(ind + 1)} >
                      <Link className={activeItem === ind + 1 ? 'nav-link active' : 'nav-link'}
                        onClick={ev => {
                          onFilter(el.id)
                      }}
                      >{ el.title }</Link>
                    </li>
                  )
                })}
              </ul>
              <div className="row">
                { setCatalogItm }
              </div>
              { catalogItm.length < 6 || catalogItm &&
                <div className="text-center">
                  <button className="btn btn-outline-primary" onClick={(ev) => {
                    downloadMoreCategoriesItem(),
                    setCount(prev => prev + 6)
                  }}>Загрузить ещё</button>
                </div>
              }
            </>
            : <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            }
          </section>
        </div>
      </div>
    </main>
  )
}

export default Catalog
