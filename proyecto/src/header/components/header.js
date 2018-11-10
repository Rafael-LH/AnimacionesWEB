import React from 'react'
import './header.scss'

// DUMP component, componente tonto, vista del MVC
const Header = props => (
    <div className='container'>
        <h1>{props.saludo}</h1>
    </div>
 )    

export default Header
