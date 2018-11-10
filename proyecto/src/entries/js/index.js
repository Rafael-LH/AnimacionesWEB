import React from 'react'
import {render} from 'react-dom'
import HeaderContainer from '../../header/container/HeaderContainer'
import {CSSTransitionGroup} from 'react-addons-css-transition-group'

render(
    <HeaderContainer saludo='Hola mundo'/>,
    document.getElementById('root')
)