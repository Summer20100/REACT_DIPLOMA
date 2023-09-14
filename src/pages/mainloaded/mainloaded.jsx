import TopSales from './components/topsales'
import CatalogSet from './components/catalogset'
import { useEffect, useState } from 'react'

const MainLoaded = () => {
  const [topsalesItm, setTopsalesItm] = useState()
  const [catalogItm, setCatalogItm] = useState()

  //let urlTopsalesItm = 'https://reactdiplomabackend.summer20100.repl.co/api/top-sales'
  //let urlCatalogItm = 'https://reactdiplomabackend.summer20100.repl.co/api/items'

  let urlTopsalesItm = 'http://localhost:7070/api/top-sales'
  let urlCatalogItm = 'http://localhost:7070/api/items'

  useEffect(() => {
    function fetchData() {
       fetch(urlTopsalesItm)
        .then((response) => {
          if (!response.ok) window.location.href = 'https://reactdiploma.summer20100.repl.co/error404'
          return response.json()
        })
        .then(data => {
          setTopsalesItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    return () => fetchData()
  }, [])

  useEffect(() => {
    function fetchData() {
       fetch(urlCatalogItm)
        .then((response) => {
          if (!response.ok) window.location.href = 'https://reactdiploma.summer20100.repl.co/error404'
          return response.json()
        })
        .then(data => {
          setCatalogItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    return () => fetchData()
  }, [])


  
  console.log(topsalesItm)
  //console.log(catalogItm)
  
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <TopSales topsalesItm={ topsalesItm } />
          <CatalogSet catalogItm={ catalogItm }/>
        </div>
      </div>
    </main>
  )
}

export default MainLoaded
