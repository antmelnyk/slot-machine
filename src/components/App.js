import React from 'react'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from '../store/reducers'

import ReelsContainer from './ReelsContainer'
import Spin from './Spin'
import Balance from './Balance';
import DebugArea from './DebugArea';

function configureStore() {
  const store = createStore(
    rootReducer,
    undefined,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );
  return store;
}

export default function App() {
  return (
    <Provider store={ configureStore() }>

      <div className='app-container'>
        <div className='play-area'>
          <ReelsContainer />
          <Spin />
        </div>
        <div className='info-area'>
          <Balance />
        </div>
        
        <DebugArea />
      </div>
      
    </Provider>
  )
}
