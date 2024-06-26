import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './MyPage.css';
import '../../styles/fonts.css';
import MyHoneypot from '../../Components/mypage/MyHoneypot';
import ParticipatingHoneypot from '../../Components/mypage/ParticipatingHoneypot';
import MyComments from '../../Components/mypage/MyComments';
import Review from '../../Components/mypage/Review';
import { useState, useEffect } from 'react'
import MyInquiry from '../../Components/mypage/MyInquiry';
import EditProfile from '../../Components/mypage/EditProfile';
import { useState, useRef, useEffect } from 'react'
import { render } from '@testing-library/react';


const MyPage = () => {

    const [selectedMenu, setSelectedMenu] = useState('editProfile')
    const [showMannerStarModal, setShowMannerStarModal] = useState(false);

    // 프로필 사진 변경
    const [profileImage, setProfileImage] = useState(`${process.env.PUBLIC_URL}/images/mypage/empty-profile-pic.jpg`);
    const fileInput = useRef(null)
    const [imageURL, setImageURL] = useState(profileImage);

    const onChangeProfilePic = (e) => {
        if (e.target.files[0]) {
            const file = e.target.files[0];
            setProfileImage(file);

            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImageURL(reader.result);
                }
            };
            reader.readAsDataURL(file);
        } else {
            setProfileImage(`${process.env.PUBLIC_URL}/images/mypage/empty-profile-pic.jpg`);
            setImageURL(`${process.env.PUBLIC_URL}/images/mypage/empty-profile-pic.jpg`);
        }
    };

    useEffect(() => {
        if (typeof profileImage === 'string') {
            setImageURL(profileImage);
        } else {
            const objectURL = URL.createObjectURL(profileImage);
            setImageURL(objectURL);

            return () => URL.revokeObjectURL(objectURL);
        }
    }, [profileImage]);


    // 기존 이름 더미데이터
  const [nickName, setNickName] = useState('전소민');
  const [introduce, setIntroduce] = useState('반복되는 일상을 특별하게 만들어 보고 싶어요.')

   // 프로필 변경
  const profileUpdate = (newNickName, newIntroduce) => {
    setNickName(newNickName);
    setIntroduce(newIntroduce);
  };
  
    const mannerStarClick = () => {
    setShowMannerStarModal(true);
  }

  const mannerStarconfirmBtn = () => {
    setShowMannerStarModal(false);
  }

  const backBtn = () => {
    setShowMannerStarModal(false);
  }

    /* 백엔드 연결 테스트 */
const [data, setData] = useState([]);

useEffect(() => {
    fetch("/mypage")
        .then((res) => res.json())
        .then((result) => {
            // result가 배열인지 확인하고 배열이 아닐 경우 빈 배열로 설정
            if (Array.isArray(result)) {
                setData(result);
            } else {
                console.error("Data is not an array:", result);
                setData([]);
            }
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
            setData([]);
        });
}, []);

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
            <img src={imageURL} className="profile-pic" alt="프로필사진" />
                    
                <div className="profile-pic-update-btn" onClick={()=>{fileInput.current.click()}}>
                   <img src={`${process.env.PUBLIC_URL}/images/common/update-pic-icon.png`} alt="사진변경아이콘" />
                   <input type='file' style={{ display: 'none' }} ref={fileInput} accept='image/jpg, image/png, image/jpeg' name='profile_img' onChange={onChangeProfilePic}
                />
                </div>
            </div>
            <div className='profile-text'>
                <div className='profile-nickname'>{nickName}</div>
                <div className='profile-intro'>
                    {introduce}
                </div>
            </div>
            <div className='manner-box' onClick={mannerStarClick}>
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
                <p onClick={() => { setSelectedMenu('myInquiry')}} className='category-main'>문의 내역</p>
                <p onClick={() => { setSelectedMenu('editProfile')}} className='category-main'>프로필 수정</p>
            </div>

            

            {/* 마이페이지 메인 - 고정 디테일 */}
            {/* <ParticipatingHoneypot/> */}
            {/* <MyHoneypot/> */}
            {/* <MyComments/> */}

            {selectedMenu === 'participatingHoneypot' && <ParticipatingHoneypot/>}
            {selectedMenu === 'myHoneypot' && <MyHoneypot/>}
            {selectedMenu === 'myComments' && <MyComments/>}
            {selectedMenu === 'review' && <Review />}
            {selectedMenu === 'myInquiry' && <MyInquiry />}
            {selectedMenu === 'editProfile' && <EditProfile nickName = {nickName} introduce = {introduce} profileUpdate={profileUpdate} /> }
            
            

            {/* 마이페이지 메인 - 고정 디테일 */}
        </div>

    {showMannerStarModal && (
        <div className="manner-modal-container">
            <div className="manner-modal-content"> 
                <div className='manner-modal-header'>
                    <img onClick={ backBtn } src={`${process.env.PUBLIC_URL}/images/mypage/back-icon.png`} alt="유저평점아이콘" />
                    <p> {nickName} </p>
                </div>

                <div className='manner-modal-middle'>
                    <p className='middle-title'>유저평점</p>
                    <div className='star-point-container'>
                        <img src={`${process.env.PUBLIC_URL}/images/common/manner-star-icon.png`} alt="유저평점아이콘" />
                        <p>4.9 / 5</p>
                    </div>
                    <div className='people-count-container'>
                        <img src={`${process.env.PUBLIC_URL}/images/mypage/people.png`} alt="유저평점아이콘" />
                        <p>N명의 멤버 평가 반영</p>
                    </div>
                </div>

                <div className='manner-modal-bottom'>
                    <p className='bottom-title'>멤버평가</p>
                    <div className='bottom-review-container'>
                        <div className='bottom-review-text'>유쾌하고 밝은 에너지로 분위기 메이커 역할을 했어요.</div>
                        <div className='bottom-review-text'>취향이 통하는 멤버를 만나 좋았어요. 다음에 또 만나고 싶어요.</div>
                        <div className='bottom-review-text'>덕분에 시간가는 줄 모르고 즐거운 경험을 했어요.</div>
                        <div className='bottom-review-text'>주도적으로 모임에 잘 참여해 주셨어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                        <div className='bottom-review-text'>대화코드가 잘 맞아 즐겁게 대화할 수 있었어요.</div>
                    </div>
                </div>
            </div>
        </div>
    )}
    <ul>
       {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)}
    </ul>
    </div>
  );
};

export default MyPage;
