import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { rootReducer} from './redux/rootReducer'
import { PersistGate } from 'redux-persist/integration/react'
// import { dataReducer } from './redux/dataReducer'
import thunk from 'redux-thunk'
// import { persistor } from './redux/configureStore'
// import { store } from './redux/configureStore'

//const store01 = createStore(dataReducer, applyMiddleware(thunk))

// import store from './redux/store'
import './index.css'

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
    {/* <PersistGate loading={<div>Loading...</div>} persistor={persistor}> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </PersistGate> */}
  </Provider>

  //</React.StrictMode>,
)
