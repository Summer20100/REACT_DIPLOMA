import './App.css';
import { Route, Routes } from 'react-router-dom'

import Header from './pages/header/header';
import MainLoad from './pages/mainload/mainload';
import MainLoaded from './pages/mainloaded/mainloaded';
import Catalog from './pages/catalog/catalog';
import Product from './pages/product/product';
import About from './pages/about/about';
import Contacts from './pages/contacts/contacts';
import Error404 from './pages/error404/error404';
import Footer from './pages/footer/footer';

function App() {
  return (
    <>
      <Header />
      {/* <Product /> */}
      <Routes>
        {/* <MainLoad /> */}

        <Route path='/' element={ <MainLoaded /> } />
        {/* <Route path='/catalog' element={ <Catalog /> } /> */}
        <Route path='/product' element={ <Product /> } />
        {/* <Route path='/about' element={ <About /> } />
        <Route path='/contacts' element={ <Contacts /> } />
        <Route path='/error404' element={ <Error404 /> } /> */}

        {/* <Error404 /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;
