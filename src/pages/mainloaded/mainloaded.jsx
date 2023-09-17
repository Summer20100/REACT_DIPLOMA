import TopSales from './components/topsales'
import CatalogSet from './components/catalogset'
import { useEffect, useState } from 'react'

const MainLoaded = () => {
  const [topsalesItm, setTopsalesItm] = useState([])
  const [catalogItm, setCatalogItm] = useState([])

  //let urlTopsalesItm = 'https://reactdiplomabackend.summer20100.repl.co/api/top-sales'
  //let urlCatalogItm = 'https://reactdiplomabackend.summer20100.repl.co/api/items'
  let urlTopsalesItm = import.meta.env.VITE_TOP_SALES
  let urlCatalogItm = import.meta.env.VITE_ITEMS
  
  useEffect(() => {
    async function fetchData() {
      await fetch(urlTopsalesItm)
        .then((response) => {
          //if (!response.ok) window.location.href = 'https://reactdiploma.summer20100.repl.co/error404'
          if (!response.ok) window.location.href = '/error404'
          return response.json()
        })
        .then(data => {
          setTopsalesItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    fetchData()
  }, [urlTopsalesItm])

  useEffect(() => {
    async function fetchData() {
       await fetch(urlCatalogItm)
        .then((response) => {
          //if (!response.ok) window.location.href = 'https://reactdiploma.summer20100.repl.co/error404'
          if (!response.ok) window.location.href = '/error404'
          return response.json()
        })
        .then(data => {
          setCatalogItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    fetchData()
  }, [urlCatalogItm])
 
  console.log(urlTopsalesItm)
  console.log(catalogItm)
  
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <TopSales topsalesItm={ topsalesItm } />
          <CatalogSet catalogItm={ catalogItm } />
        </div>
      </div>
    </main>
  )
}

export default MainLoaded
