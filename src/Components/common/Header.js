import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Header의 스타일 파일
import '../../styles/fonts.css'

const Header = () => {
  return (
    <header className='white-nav'>
      <div className='logo'>
        <img src={`${process.env.PUBLIC_URL}/images/common/color-logo.png`} alt="로고" />
      </div>
      <div className='nav-title'>
        <Link to="/">오픈공지</Link>
      </div>
      <div className='nav-title'>
        <Link to="/about">허니팟</Link>
      </div>
      <div className='nav-title'>
        <Link to="/help">고객센터</Link>
      </div>
      <div className='mypage-btn'>
        <Link to="/mypage"><img src={`${process.env.PUBLIC_URL}/images/common/mypage-icon.png`} alt="로고" /></Link>
      </div>
      <div className='logout-btn'>
      <img src={`${process.env.PUBLIC_URL}/images/common/logout-icon.png`} alt="로고" />

      </div>
    </header>
  );
};

export default Header;
