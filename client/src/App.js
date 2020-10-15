import React from 'react';
import Feedback from './components/Feedback'
import Display from './components/display'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';

import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component
{

  render(){
    return(
      <Provider store={store}>
      <BrowserRouter>
          <div>
        
            
            <Switch>
              <Route path="/"  exact={true}  component={ Feedback } /> 
              <Route path="/submit" exact={true} component={ Display } />   
             
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
