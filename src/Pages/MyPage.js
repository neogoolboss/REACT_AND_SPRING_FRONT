import React from 'react';
import './MyPage.css';
import '../styles/fonts.css';


const MyPage = () => {
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
        {/* 프로필 메인 */}
        <div className='mypage-main-container'>
            <div className='mypage-category'>
                <p className='category-main'>허니팟</p>
                <p className='category-sub'>참여중인 허니팟</p>
                <p className='category-sub'>내가 만든 허니팟</p>
                <p className='category-sub'>내가 쓴 댓글</p>
                <p className='category-main'>멤버 평가</p>
                <p className='category-main'>문의 내역</p>
                <p className='category-main'>프로필 수정</p>
            </div>
            <div className='category-detail'>
                <p>참여중인 허니팟이 없습니다.</p>
                <div className='find-honeypot-btn'>허니팟 찾기</div>
            </div>

        </div>
    </div>
  );
};

export default MyPage;
