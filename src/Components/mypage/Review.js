import "./Review.css";
import { useState } from "react";

function MyComments() {
  let [자료있음, 자료변경] = useState(false);

  /* 프로필 선택 */
  const profiles = [
    { imgSrc: "/images/mypage/profile-father.png", name: "웅이아버지" },
    { imgSrc: "/images/mypage/profile-song.png", name: "귀여운처제" },
    { imgSrc: "/images/mypage/profile-push.png", name: "당기나미나" },
  ];

  const [selectedProfileIndex, setSelectedProfileIndex] = useState(null);

  const handleProfileClick = (index) => {
    setSelectedProfileIndex(index);
    setSelectedPointIndex(null); // 프로필 선택 시 포인트 선택 초기화
};

const handlePointClick = (index) => {
    setSelectedPointIndex(index);
};


  /* 프로필 선택 */

  /* 평점 얼굴 선택 */
  const [selectedPointIndex, setSelectedPointIndex] = useState(null);

  const choiceFace = (index) => {
    setSelectedPointIndex(index);
  };

  const pointChoices = [
    { imgSrc: "/images/mypage/angryface.png", text: "못 만났어요" },
    { imgSrc: "/images/mypage/pensiveface.png", text: "불편했어요" },
    { imgSrc: "/images/mypage/neutralface.png", text: "보통이에요" },
    { imgSrc: "/images/mypage/grinningface.png", text: "괜찮았어요" },
    { imgSrc: "/images/mypage/starstruck.png", text: "좋았어요!" },
  ];
  /* 평점 얼굴 선택 */

  /* 평점 얼굴 선택시 텍스트 */

  return (
    <>
      <div className="review-detail">
        <div className="fin-honeypot-title">
          <p>진행완료 된 허니팟</p>
        </div>
        <div className="fin-honeypot-container">
          {/* 자료 없음 */}
          {/* <div className="null-fin-honeypot-list">
            <p>진행완료된 허니팟이 없어요</p>
            <p className="blur">
              진행 완료된 허니팟은 여기에서 확인할 수 있어요.
            </p>
          </div>
          <div className="null-fin-honeypot-member-list">
            <p>진행완료된 허니팟이 없으면</p>
            <p>평가를 할 수 없습니다.</p>
          </div> */}
          {/* 자료 있음 */}
          <div className="fin-honeypot-list">
            <div className="fin-honeypot">
              <div className="poster">
                <img
                  src={`${process.env.PUBLIC_URL}/images/mypage/poster.png`}
                  alt="사진변경아이콘"
                />
              </div>
              <div className="list-contents">
                <div className="text">
                  <p className="status">진행완료</p>
                  <p className="reg-date">2024년 6월 3일 모집시작</p>
                  <p className="honeypot-title">XX 같이 볼 사람</p>
                  <p className="participate">참여인원 4/4</p>
                </div>
                <div className="button">
                  <button>멤버 평가</button>
                </div>
              </div>
            </div>
          </div>
          {/* 버튼 누르기 전 */}
          {/* <div className="hide-honeypot-member-list">
            <p>좌측 멤버 평가를 눌러주세요.</p>
          </div> */}
          {/* 버튼 눌렀을 시 */}
          <div className="fin-honeypot-member-list">
            <div className="review-explanation">
              <div className="explanation-semibold">
                <p>신뢰할 수 있는 커뮤니티를 만들기 위해</p>
                <p>멤버 평가를 남겨주세요.</p>
              </div>
              <div className="explanation-blur">
                <p>남겨주신 평가는 익명으로 반영되며</p>
                <p>원하는 멤버만 선택해서 평가할 수 있어요.</p>
              </div>
            </div>
            <div className="choice-profile">
                {profiles.map((profile, index) => (
                    <div
                        className="one-profile"
                        onClick={() => handleProfileClick(index)}
                        key={index}
                        style={{
                            opacity: selectedProfileIndex !== null && selectedProfileIndex !== index ? 0.3 : 1,
                            cursor: 'pointer', // 선택 가능하다는 것을 시각적으로 표시
                        }}
                    >
                        <img src={`${process.env.PUBLIC_URL}${profile.imgSrc}`} alt="프로필사진" />
                        <p style={{
                            color: selectedProfileIndex === index ? '#EB844A' : 'inherit',
                            fontFamily: selectedProfileIndex === index ? "'SUIT Semibold', sans-serif" : "'var(--blur-color)'"
                        }}>{profile.name}</p>
                    </div>
                ))}
            </div>
            {/*멤버 프로필 선택 시*/}
            <div className="choice-point-container">
                {selectedProfileIndex !== null ? (
                    pointChoices.map((pointChoice, index) => (
                        <div
                            className="choice-point"
                            onClick={() => handlePointClick(index)}
                            key={index}
                            style={{
                                opacity: selectedPointIndex !== null && selectedPointIndex !== index ? 0.3 : 1,
                                cursor: 'pointer' // 선택 가능하다는 것을 시각적으로 표시
                            }}
                        >
                            <img src={`${process.env.PUBLIC_URL}${pointChoice.imgSrc}`} alt="점수선택사진" />
                            <p>{pointChoice.text}</p>
                        </div>
                    ))
                ) : (
                    // 선택된 프로필이 없는 경우 빈 div로 처리
                    <div></div>
                )}
            </div>
            
            {/* 못 만났어요 선택 시 */}
            <div className="choice-text">

            </div>
            <button>제출</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyComments;
