import TopSales from './components/topsales'
import CatalogSet from './components/catalogset'
import { fetchDataTop, receiveDataTop, fetchDataCatalog, receiveDataCatalog } from './../../redux/actions'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"

const MainLoaded = (props) => {
  //let urlTopsalesItm = 'https://react-diploma-backend.onrender.com/api/top-sales'
  let urlTopSales = import.meta.env.VITE_TOP_SALES
  //let urlCatalogItm = 'https://react-diploma-backend.onrender.com/api/items'
  let urlItems = import.meta.env.VITE_ITEMS


  const dispatch = useDispatch()

  // TOP-SALES
  
  const topsalesItm = useSelector(state => {
    const { topSalesReducer } = state
    return topSalesReducer.data
  })

  const topsalesloading = useSelector(state => {
    const { topSalesReducer } = state
    return topSalesReducer.loading
  })
  
  useEffect(() => {
    dispatch(fetchDataTop())
    fetch(urlTopSales)
      .then((response) => response.json())
      .then((data) => dispatch(receiveDataTop(data)))
  }, [dispatch])

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
    fetch(urlItems)
      .then((response) => response.json())
      .then((data) => dispatch(receiveDataCatalog(data)))
  }, [dispatch])

  // ________

  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <section className="top-sales">
            <h2 className="text-center">Хиты продаж!</h2>
            { topsalesloading 
              ? <TopSales topsalesItm={ topsalesItm } />
              : <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            }
            {/* <TopSales topsalesItm={ topsalesItm } /> */}
          </section>
          <section className="catalog">
            <h2 className="text-center">Каталог</h2>
            {/* { catalogloading 
              ? <CatalogSet catalogItm={ catalogItm } />
              : <div className="preloader">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            }             */}
            <CatalogSet />
          </section>
        </div>
      </div>
    </main>
  )
}

export default MainLoaded
