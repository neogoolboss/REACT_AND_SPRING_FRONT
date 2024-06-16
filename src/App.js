import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/layout/Layout';
import HomePage from './Pages/HomePage';
import HoneyPotPage from './Pages/HoneyPotPage';
import MyPage from './Pages/MyPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<HoneyPotPage />} />
          <Route path="/mypage" element={<MyPage/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
