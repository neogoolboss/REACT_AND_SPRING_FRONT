import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from '../../Pages/MainPage';
import HoneyPotPage from '../../Pages/HoneyPotPage';
import MyPage from '../../Pages/MyPage';
import HelpPage from '../../Pages/HelpPage';

const Routers = () => {
  return (
    <>
      <Route exact path="/" component={MainPage} />
      <Route path="/about" component={HoneyPotPage} />
      <Route path="/help" component={HelpPage} />
      <Route path="/mypage" component={MyPage}/>
      {/* Add more routes as needed */}
    </>
  );
};

export default Routers;
