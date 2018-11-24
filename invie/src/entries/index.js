import React from 'react'
import {render} from 'react-dom'
import Invie from '../homeInvie/Invie'

// redux nos ayuda a distribuir datos, con el componente react-redux distribuiremos esos datos
import { Provider } from 'react-redux'

//animaciones por pantalla
import AnimacionScreen from '../cheet/Cheet'
import GoBack from '../cheet/Back'

//Component Redux
import store from '../redux/Redux'
import initialState from '../portada/container/dataMenu'
//easter donde cambiara nuestro index despues de escribir invie
import easter from '../easter/Easter.js'

// llamamos a nuestra animacion que mostrara pantalla
AnimacionScreen(store, easter)

// quitamos nuestra animacion por pantalla pantalla
GoBack(store, initialState)

render(
    <Provider store={store}>
        <Invie />
    </Provider>,
    document.getElementById('root')
)
