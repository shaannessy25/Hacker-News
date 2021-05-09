import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CreateLink from './components/CreateLink';
import Header from './components/Header';
import LinkList from './components/LinkList';
import Login from './components/Login'
import Search from './components/Search'

const App = () => {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={LinkList} />
          <Route
            exact
            path="/create"
            component={CreateLink}
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </div>
    </div>
  );
};

export default App;