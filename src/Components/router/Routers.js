import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../../Pages/HomePage';
import HoneyPotPage from '../../Pages/HoneyPotPage';
import MyPage from '../../Pages/MyPage';

const Routers = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={HoneyPotPage} />
      <Route path="/mypage" component={MyPage}/>
      {/* Add more routes as needed */}
    </>
  );
};

export default Routers;
