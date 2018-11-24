import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../../css/animations.css'

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
                    <div className="contenedor-guitarra-a">
                        <h3 className="title-b">{guitarra.title}</h3>
                        <ol>
                             <li>Estilo vintage</li>      
                             <li>Madera Pura</li>      
                             <li>Incluye estuche invible de aluminio</li>      
                        </ol>
                    </div>
                </article>
                )
            })
    )

    export default Guitarras