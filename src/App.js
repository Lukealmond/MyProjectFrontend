import React, { Component } from "react";
import ReactDOM from "react-dom";
import DragnDropContainer from './DragnDrop_Editor/DragnDropContainer'
import { Provider } from "react-redux";
import themeStore from "./DragnDrop_Styling/themeStore";
import Theme from "./DragnDrop_Styling/Theme";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from './Password/SignUp'
import view from './DataStudio/View'



class App extends Component {
  state = {  }
  render() { 
    return (
      <div>
      <Router>
        <Switch>
            <Route path='/editor' component={DragnDropContainer}></Route>    
            <Route path='/login' component={SignUp}></Route>   
            <Route path='/view' component={view}></Route>  
        </Switch> 
      </Router>
      </div>
      );
  }
}

ReactDOM.render(
      <Provider  store={themeStore}>
        <App/>
      </Provider>,
document.getElementById("root"));