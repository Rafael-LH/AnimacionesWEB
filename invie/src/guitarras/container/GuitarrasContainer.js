import React, {Component} from 'react'
import Data from './data'
import Guitarras from '../components/Guitarras'

export default class GuitarrasContainer extends Component{
            render(){
              const img = [
                  {
                  img: '../../images/invie-acustica.png',
                  key: 1
                  }
              ]
               return(
                <section id="guitarras" className="guitarras contenedor">
                  <h2>Nuestra guitarras</h2>
                  
                  <Guitarras data={Data.guitarras} />
                </section>
                )
            }
    }