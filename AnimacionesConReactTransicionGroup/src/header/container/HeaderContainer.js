import React, {Component} from 'react'
import './HeaderContainer.scss'
import Header from '../components/header'
import CSSTransitionGroup from 'react-addons-css-transition-group'
import logo from './platzi.png'
import appleLogo from './apple.png'

// SMART Component, Componente inteligente , controlador del MVC
export default class HeaderContainer extends Component {
    state = {
      logo: logo,
      saludo: 'Hola Mundo!'
    }  
  onClick = e =>{
      this.setState({
          logo: appleLogo
      })
    }  

  render() {
      return (
        <div className="App">
               <CSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={1000}
               >
              <img
                  key={this.state.logo}
                  src={this.state.logo}
                  className='Logo'
                  alt='logo' 
                  />
               </CSSTransitionGroup>
               <Header saludo={this.state.saludo}/>
               <button onClick={this.onClick}>Click Me!</button>
        </div>
      )
    }
  }
    