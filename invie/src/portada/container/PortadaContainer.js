import React, {Component} from 'react'
import Portada from '../components/Portada'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'
import HeartContainer from '../../Heart/container/HeartContainer'

// Smart Component, Componente Inteligente, Controlador del MVC
const mapStateToProps = state =>(
        {
            logoPortada: state.logoPortada,
            menu: state.menu,
            isAnimated: state.isAnimated
        }
)
 class PortadaContainer extends Component{
            render(){
                return(
                    <section id="portada" className={`portada background ${this.props.isAnimated}`}>
                        <header id="header" className="header contenedor">
                        <figure className="logotipo">
                            {
                                this.props.logoPortada.map(logo => {
                               return <img key={logo.key} src={logo.src} width={logo.width} height={logo.height} alt={logo.alt}/>
                             })
                            }
                        </figure>
                        <nav className="menu">
                            <ul>
                                <Portada data={this.props.menu} />
                            </ul>
                        </nav>
                        </header>
                        <ReactCSSTransitionGroup
                            transitionName='animationInOut'
                            transitionEnterTimeout={800}
                            transitionLeaveTimeout={800}
                        >
                            {
                                (!this.props.isAnimated) &&
                            <div className="contenedor" key="portada">
                                <h1 className="titulo">Guitarras <span>invie</span>sibles</h1>
                                <h3 className="title-a">Sé la estrella de rock que siempre quisiste ser</h3>
                                <a className="button" href="#guitarras">Conoce mas</a>
                            </div>
                            }
                        </ReactCSSTransitionGroup>
                        {
                            this.props.isAnimated && 
                            <HeartContainer />
                        }
                    </section>
                )
            }
}
export default connect(mapStateToProps)(PortadaContainer)