import React,{Component} from 'react'
import Heart from '../components/Heard'

 export default class HeartContainer extends Component{
       
    renderHeard = () => {
            const hearts = new Array(100).fill({})

            return(
                hearts.map((i, index) => {
                    let style = {
                        // window.innerWith traemos el ancho de nuestra pantalla
                        left: Math.floor( (Math.random() * (window.innerWidth - 0) ) ) + 0 + 'px',
                        animationDelay: Math.floor( (Math.random() * (10000 - 0) ) ) + 0 + 'ms'
                    }
                    return  <Heart style={style} key={index} />
                  }) 
            )
        }
        render(){
                return(
                   this.renderHeard() 
                )
            }
       }