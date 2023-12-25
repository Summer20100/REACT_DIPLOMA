import { NavLink, Link } from 'react-router-dom'
import Itm from './itm'
import { fetchDataCatalog, receiveDataCatalog, fetchDataCategories, receiveDataCategories } from './../../../redux/actions'
import Categories from './categories'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

const CatalogSet = ( props ) => {
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

  const [urlFilter, setUrlFilter] = useState(urlItems)
  const [idCategories, setIdCategories] = useState('')
  const [count, setCount] = useState(6)

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
    setUrlFilter(urlFilterBase + id)
    setCount(0)
  }

  // const countMore = (num) => {
  //   setCount(count + num)
  // }

  const downloadMoreCategoriesItem = (ev) => {
    //countMore(6)
    setUrlFilter(urlDownloadMoreCategoriesBase01 + idCategories + urlDownloadMoreCategoriesBase02 + count)
  }

  const [activeItem, setActiveItem] = useState(0);
  
  const handleItemClick = (index) => { setActiveItem(index) };
  const setCatalogItm = catalogItm.map((el, ind) => <Itm key={el.id} {...el} />)
  const setCategories = categories.map((el, ind) => <Categories key={el.id} {...el} onFilter={onFilter} handleItemClick={ handleItemClick } ind={ ind }/>)
  
  
  return (
    <>
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
          {/* { setCategories } */}
        </ul>
        <div className="row">
          {setCatalogItm}
        </div>
        { catalogItm.length < 6 || catalogItm &&
        <div className="text-center">
          <button className="btn btn-outline-secondary" onClick={(ev) => {
            downloadMoreCategoriesItem(),
            setCount(prev => prev + 6 )
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
    </>    
  )
}

export default CatalogSet
