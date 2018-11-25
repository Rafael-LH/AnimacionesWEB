import React, {Component} from 'react'
import Guitarras from '../components/Guitarras'
import { connect } from 'react-redux'

const mapStateToProps = state => (
      {
        guitarras: state.guitarras
      }
)

class GuitarrasContainer extends Component{
            render(){
               return(
                <section id="guitarras" className="guitarras contenedor">
                  <h2>Nuestra guitarras</h2>
                  <Guitarras data={this.props.guitarras} />
                </section>
                )
            }
    }
   
    export default connect(mapStateToProps)(GuitarrasContainer)   