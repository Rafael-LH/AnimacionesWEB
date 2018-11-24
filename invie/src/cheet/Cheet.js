import Cheet from 'cheet.js'

const AnimacionScreen = (store, easter) => {
     Cheet('i n v i e', ()=>{
        // console.log(`Hola`);
        store.dispatch({
          type: 'UPDATE_PROPS',
          payload: {
            props: easter
          }
        })
  })
  
}

export default AnimacionScreen
