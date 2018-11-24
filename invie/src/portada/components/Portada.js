import React from 'react'

// Dumb component, Vista del MVC, UI (user interface)

const Portada = props => (
    props.data.map(items => {
        return(
            <li key={items.id} >
                <a href={items.href} >{items.title}</a>
            </li>
        )
    }) 
)
export default Portada