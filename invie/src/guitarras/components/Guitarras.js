import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../css/animations.css'

// componente funcional, UI component
    const Guitarras = props =>(

        props.data.map(guitarra => {
            return(
                <article className="guitarra" key={guitarra.key}>
                    <ReactCSSTransitionGroup
                        transitionName="flicker"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={500}
                        >
                        <img
                            className="guitarra-image"
                            src={guitarra.src}
                            key={guitarra.src}
                            alt={guitarra.alt}
                        />
                    </ReactCSSTransitionGroup>
                    <ReactCSSTransitionGroup
                        transitionName="fade"
                        transitionEnterTimeout={300}
                        transitionLeave={false}
                    >
                        <div className="contenedor-guitarra-a" key={guitarra.title}>
                            <h3 className="title-b">{guitarra.title}</h3>
                            <ol>
                                <li>Estilo vintage</li>      
                                <li>Madera Pura</li>      
                                <li>Incluye estuche invible de aluminio</li>      
                            </ol>
                        </div>
                    </ReactCSSTransitionGroup>
                </article>
                )
            })
    )

    export default Guitarras