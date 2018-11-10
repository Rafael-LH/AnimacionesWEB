import React from 'react'
import {render} from 'react-dom'
import HeaderContainer from '../../header/container/HeaderContainer'

render(
    <HeaderContainer saludo='Hola mundo'/>,
    document.getElementById('root')
)