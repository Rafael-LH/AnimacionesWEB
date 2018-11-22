import Cheet from 'cheet.js'

const GoBack = (store, data) =>{
    Cheet('g o b a c k', ()=>{
        // console.log(`Regresaste al estado inicia`);
        store.dispatch({
            type: 'UPDATE_PROPS',
            playload: {
              props: data
            }
          })
  })
}

export default GoBack