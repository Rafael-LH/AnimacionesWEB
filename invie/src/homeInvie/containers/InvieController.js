import React, {Component} from 'react'
import Invie from '../components/Invie'

// Smart Component, Componente Inteligente, Controlador del MVC
export default class InvieController extends Component{
            render(){
                return(
                  <section>
                    <Invie saludo='Hola Mundo' />
                  </section>
                )
            }
}