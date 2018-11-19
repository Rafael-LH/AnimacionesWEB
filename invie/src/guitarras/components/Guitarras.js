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
                             <li>{guitarra.content}</li>      
                        </ol>
                    </div>
                </article>
                )
            })
    )

    export default Guitarras