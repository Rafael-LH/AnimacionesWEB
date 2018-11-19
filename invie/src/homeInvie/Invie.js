import React, {Component} from 'react'
import '../css/invie.css'
import '../css/animations.css'
import Portada from '../portada/container/PortadaContainer'
import Guitarras from '../guitarras/container/GuitarrasContainer'
import Footer from '../footer/container/FooterContainer'

// Smart Component, Componente Inteligente, Controlador del MVC
export default class InvieController extends Component{
            render(){
                return(
                  <section className='Invie'>
                    <Portada />
                    <Guitarras />
                    <Footer />
                  </section>
                )
            }
}