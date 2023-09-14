import './App.css';
import { Route, Routes } from 'react-router-dom'

import Header from './pages/header/header';
import MainLoad from './pages/mainload/mainload';
import MainLoaded from './pages/mainloaded/mainloaded';
import Catalog from './pages/catalog/catalog';
import About from './pages/about/about';
import Contacts from './pages/contacts/contacts';
import Error404 from './pages/error404/error404';
import Footer from './pages/footer/footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        {/* <MainLoad /> */}

        <Route path='REACT_DIPLOMA/' element={ <MainLoaded /> } />
        <Route path='REACT_DIPLOMA/catalog' element={ <Catalog /> } />
        <Route path='REACT_DIPLOMA/about' element={ <About /> } />
        <Route path='REACT_DIPLOMA/contacts' element={ <Contacts /> } />
        <Route path='REACT_DIPLOMA/error404' element={ <Error404 /> } />

        {/* <Error404 /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App;
