import React, { Component } from 'react';

//router
import { Route, Switch, Router, Link } from 'react-router-dom';
// import {Link} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import SubMain from './components/SubMain';

import store from './store/index';
import { Provider } from 'react-redux';


const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      
    <Router history={history}>
      <Switch>
      <Provider store={store}>
      <div className="">
        <div className="app-container">
          <Link to='/'><h2>Money Manager</h2></Link>
          <Route exact path='/' component={Main} />
          <Route exact path='/:name' component={SubMain} />

        </div>
      </div>
    </Provider>    
    </Switch>
      
    </Router>
    
    );
  }
}

export default App;