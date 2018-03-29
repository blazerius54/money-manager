import React, { Component } from 'react';

//router
import { Route, Switch, Router } from 'react-router-dom';
// import {Link} from 'react-router-dom';

import createBrowserHistory from 'history/createBrowserHistory';
import Main from './components/Main';
import SubMain from './components/SubMain';
import Header from './components/Header';

import store from './store/index';
import { Provider } from 'react-redux';


const history = createBrowserHistory();


class App extends Component {
  render() {
    return (
      
    <Router history={history}>
      <Switch>
        <Provider store={store}>
          <div className="app-container">
          <Header />
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Main} />
            <Route path={process.env.PUBLIC_URL + '/:name'} component={SubMain} />
          </div>
        </Provider>    
      </Switch>
    </Router>
    
    );
  }
}

export default App;