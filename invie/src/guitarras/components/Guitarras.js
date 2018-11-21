import React from 'react'

    const Guitarras = props =>(

        props.data.map(guitarra => {
            return(
                <article className="guitarra" key={guitarra.key}>
                    <img
                        className="guitarra-image"
                        src={guitarra.src}
                        alt=''
                    />
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