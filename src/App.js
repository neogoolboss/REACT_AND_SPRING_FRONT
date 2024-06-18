import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import MainPage from './Pages/MainPage';
import HoneyPotPage from './Pages/HoneyPotPage';
import HelpPage from './Pages/HelpPage';
import MyPage from './Pages/mypage/MyPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<HoneyPotPage />} />
          <Route path="/help" element={<HelpPage/>} />
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
