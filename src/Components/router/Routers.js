import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './MainPage';
import HoneyPotPage from './HoneyPotPage';
import HelpPage from './HelpPage';
import MyPage from './MyPage';



const Routers = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/about" component={HoneyPotPage} />
        <Route path="/help" component={HelpPage} />
        <Route path="/mypage" component={MyPage} />
      </Switch>
    </Router>
  );
};

export default Routers;
