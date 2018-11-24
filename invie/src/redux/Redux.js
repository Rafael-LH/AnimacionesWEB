import React from 'react'
import { createStore } from 'redux'

//mi data del menu , logo portada y guitarras
import initialState from '../portada/container/dataMenu'

const reducer = (state, action ) => {
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

export default store