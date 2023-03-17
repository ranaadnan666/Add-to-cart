import {createStore,applyMiddleware,compose} from  'redux'
import persistStore from 'redux-persist/es/persistStore';
import appReducer from '../appReducer';
  

const composeEnhancers = window.__REDUX_DEVTOOLA_EXTENSION_COMPOSE__|| compose;



const store=createStore(appReducer,composeEnhancers(applyMiddleware()))
 const persistor=persistStore(store)

 export{store,persistor}