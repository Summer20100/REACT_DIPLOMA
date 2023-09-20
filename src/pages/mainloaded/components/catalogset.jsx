//import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Categories from './categories'
import Itm from './itm'

const CatalogSet = ({catalogItm}) => {
  const [categoriesItm, setCategoriesItm] = useState([])
  //console.log(store)

  //let categoriesUrl = 'https://reactdiplomabackend.summer20100.repl.co/api/categories'
  let categoriesUrl = import.meta.env.VITE_CATEGORIES

  useEffect(() => {
    async function fetchData() {
       fetch(categoriesUrl)
        .then((response) => {
          if (!response.ok) window.location.href = '/error404'
          return response.json()
        })
        .then(data => {
          setCategoriesItm(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    fetchData()
  }, [categoriesUrl])

  //console.log(import.meta.env.VITE_CATEGORIES)

  const setCategories = categoriesItm.map((el,ind) => <Categories key={ el.id } {...el} /> )

  const setCatalogItm = catalogItm.map((el,ind) => <Itm key={ el.id } {...el} /> )
  //console.log(setCatalogItm)

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      <ul className="catalog-categories nav justify-content-center">
        <li className="nav-item">
          <a className="nav-link active" href="#">Все</a>
        </li>
        { setCategories }
      </ul>
      <div className="row">
        { setCatalogItm }
      </div>
      <div className="text-center">
        <Link to='https://www.google.ru/'>
          <button className="btn btn-outline-primary">Загрузить ещё</button>
        </Link>
      </div>
    </section>
  )

  
}
function mapStateToProps(state) {
    console.log('mapStateToProps:', state)
    return {
      title: state.title
    }
}

//export default connect(mapStateToProps)(CatalogSet)

export default CatalogSet
