import './App.css';
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from 'react'

//import { Provider } from 'react-redux'
//import store from './redux/store'

import Header from './pages/header/header';
import MainLoad from './pages/mainload/mainload';
import MainLoaded from './pages/mainloaded/mainloaded';
import Catalog from './pages/catalog/catalog';
import Product from './pages/product/product';
import Cart from './pages/cart/cart'
import About from './pages/about/about';
import Contacts from './pages/contacts/contacts';
import Error404 from './pages/error404/error404';
import NullProduct from './pages/error404/nullProduct';
import Footer from './pages/footer/footer';

function App() {
  const [storageLength, setStorageLength] = useState(0)
  useEffect(() => {
    setStorageLength(localStorage.length);
  }, [storageLength]);

  const length = useSelector(state => {
    const { catalogReducer } = state
    return catalogReducer.data.length
  })

  console.log('length', length)
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainLoaded />} />
        {/* <Route path='/catalog' element={ !length ? <NullProduct /> : <Catalog />} /> */}
        <Route path='/catalog' element={ <Catalog />} />
        <Route path='/catalog/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
