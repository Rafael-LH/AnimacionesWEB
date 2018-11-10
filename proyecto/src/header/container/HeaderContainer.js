import React, {Component} from 'react'
import Header from '../components/header'

// SMART Component, Componente inteligente , controlador del MVC
export default class HeaderContainer extends Component{

            render(){
                return(
                    <Header saludo={this.props.saludo} />
                )
            }
}   