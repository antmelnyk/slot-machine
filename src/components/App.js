import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../store/reducers'

import ReelsContainer from './ReelsContainer'
import Spin from './Spin'

function configureStore() {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
  return store;
}

export default function App() {
  return (
    <Provider store={ configureStore() }>
      <div className='app-container'>
        <ReelsContainer />
        <Spin />
      </div>
    </Provider>
  )
}
