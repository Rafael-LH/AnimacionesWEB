import React from 'react'
import {render} from 'react-dom'
import Invie from '../homeInvie/Invie'

// redux nos ayuda a distribuir datos
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import AnimacionScreen from '../cheet/Cheet'
import GoBack from '../cheet/Back'
import initialState from '../portada/container/dataMenu'

function reducer(state, action ){
    switch(action.type) {
      case'UPDATE_PROPS':{
        const newProps = action.payload.props;
        return{ ...state, ...newProps }
      }
        default:
        return state
    }
  }
const store = createStore(reducer, initialState)
const easter = {
    menu:[
        {
            href: "index.html",
            title: "Home",
            id: 1
        }
    ]
}
// llamamos a nuestra animacion que mostrara pantalla
AnimacionScreen(store, easter)
// quitamos nuestra animacion por pantalla pantalla
GoBack(store, initialState)

render(
    <Provider store={store}>
        <Invie />
    </Provider>,
    document.getElementById('root')
)
