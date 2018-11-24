import React, {Component} from 'react'
import Portada from '../components/Portada'
import { connect } from 'react-redux'

// Smart Component, Componente Inteligente, Controlador del MVC
const mapStateToProps = state =>(
        {
            logoPortada: state.logoPortada,
            menu: state.menu
        }
)

 class PortadaContainer extends Component{
            render(){
                return(
                    <section id="portada" className='portada background'>
                        <header id="header" className="header contenedor">
                        <figure className="logotipo">
                            {
                                this.props.logoPortada.map(logo => {
                                <img key={logo.key} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt}/>
                             })
                            }
                        </figure>
                        <nav className="menu">
                            <ul>
                                <Portada data={this.props.menu} />
                            </ul>
                        </nav>
                        </header>
                        <div className="contenedor" key="portada">
                            <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                            <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                            <a className="button" href="#guitarras">Conoce mas</a>
                        </div>
                    </section>
                )
            }
}
export default connect(mapStateToProps)(PortadaContainer)