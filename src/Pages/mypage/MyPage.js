import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './MyPage.css';
import '../../styles/fonts.css';
import MyHoneypot from '../../Components/mypage/MyHoneypot';
import ParticipatingHoneypot from '../../Components/mypage/ParticipatingHoneypot';
import MyComments from '../../Components/mypage/MyComments';
import Review from '../../Components/mypage/Review';
import { useState } from 'react'


const MyPage = () => {

    const [selectedMenu, setSelectedMenu] = useState('review')


  return (
    <div className='mypage-container'>
        {/* 페이지 제목 */}
        <div className="title">
            마이페이지
        </div>
        {/* 페이지 제목 */}
        {/* 프로필 상부 */}
        <div className="profile-top">
            <div className="profile-box">
                <div className="profile-pic">IMAGE</div>
                <div className="profile-pic-update-btn">
                   <img src={`${process.env.PUBLIC_URL}/images/common/update-pic-icon.png`} alt="사진변경아이콘" />
                </div>
            </div>
            <div className='profile-text'>
                <div className='profile-nickname'>전소민</div>
                <div className='profile-intro'>
                    반복되는 일상을 특별하게 만들어 보고 싶어요.
                </div>
            </div>
            <div className='manner-box'>
                <img src={`${process.env.PUBLIC_URL}/images/common/manner-star-icon.png`} alt="유저평점아이콘" />
                <div className='manner-text'>
                    <p>유저평점</p>
                    <p>4.9 / 5</p>
                </div>
            </div>
        </div>
        {/* 프로필 상부 */}
        {/* 마이페이지 메인 - 고정 카테고리 */}
        <div className='mypage-main-container'>
            <div className='mypage-category'>
                <p onClick={() => { setSelectedMenu('participatingHoneypot')}} className='category-main'>허니팟</p>
                <p onClick={() => { setSelectedMenu('participatingHoneypot')}} className='category-sub'>참여중인 허니팟</p>
                <p onClick={() => { setSelectedMenu('myHoneypot')}} className='category-sub'>내가 만든 허니팟</p>
                <p onClick={() => { setSelectedMenu('myComments')}} className='category-sub'>내가 쓴 댓글</p>
                <p onClick={() => { setSelectedMenu('review')}} className='category-main'>멤버 평가</p>
                <p className='category-main'>문의 내역</p>
                <p className='category-main'>프로필 수정</p>
            </div>

            

            {/* 마이페이지 메인 - 고정 디테일 */}
            {/* <ParticipatingHoneypot/> */}
            {/* <MyHoneypot/> */}
            {/* <MyComments/> */}

            {selectedMenu === 'participatingHoneypot' && <ParticipatingHoneypot/>}
            {selectedMenu === 'myHoneypot' && <MyHoneypot/>}
            {selectedMenu === 'myComments' && <MyComments/>}
            {selectedMenu === 'review' && <Review />}
            
            

            {/* 마이페이지 메인 - 고정 디테일 */}
        </div>
       
    </div>
  );
};

export default MyPage;
