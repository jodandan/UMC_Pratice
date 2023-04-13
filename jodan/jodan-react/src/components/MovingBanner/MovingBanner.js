import React from "react";
import { useState } from "react";

const MovingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const movingIcons = [    "고양이1",    "고양이2",    "고양이3",    "고양이4",    "고양이5",    "고양이6",    "고양이7",    "고양이8",    "고양이9",    "고양이10",    "고양이11",    "고양이12",    "고양이13",    "고양이14",  ];

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + movingIcons.length) % movingIcons.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % movingIcons.length);
  };

  const handleStopClick = () => {
    alert("stop button clicked");
  };

  return (
<div id="autoslide_under">
    <div className="under_container">
        <div className="controller">
          <div className="index-indicator">
            <span className="current_index">{currentIndex + 1}</span> /
            <span className="total_index">{movingIcons.length}</span>
          </div>
          <div className="controller_button">
            <button type="button" id="prev-btn" onClick={handlePrevClick}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button type="button" id="stop-btn" onClick={handleStopClick}>
              <i className="fas fa-play"></i>
            </button>
            <button type="button" id="next-btn" onClick={handleNextClick}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
        <div className="divider"></div>
        <div className="moving_banner">
          <div className="moving_banner_icon" id="movingBannerIcon">
            {movingIcons.map((icon, index) => (
              <span
                key={index}
                className={`moving_icon ${currentIndex === index ? "active" : ""}`}
              >
                {icon}
              </span>
            ))}
          </div>
          <div className="moving_banner_icon_leftline" style={{ display: "block" }}></div>
          <div className="moving_banner_icon_rightline" style={{ display: "block" }}></div>
        </div>
        <button type="button" className="openpage" id="toggleButton">
          <i className="fas fa-chevron-down"></i>
        </button>
        <div className="container show-more-container" style={{ display: "block" }}>
            <div className="show-more-box">
                <div className="show-more-header">
                    <h3>진행중인 모든 이벤트</h3>
                    <button type="button" className="e-close-show-more">
                      닫기
                    </button>
                </div>
                <div className="show-more-list">
                    <ul className="">
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="736">
                          7th창립기념일🍀
                        </span>
                        </li>

                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="396">
                         로드맵 🌱
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="733">
                         무료 부트캠프
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="612">
                        3시간 완강 가능!
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                         <span className="pagination-bullet e-select-bullet hero-bullet" data-id="394">
                         Top 50 👑
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                         <span className="pagination-bullet e-select-bullet hero-bullet" data-id="145">
                        왕초보 모여라 😎
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                         <span className="pagination-bullet e-select-bullet hero-bullet pagination-bullet-active" data-id="729">
                         클라우드 국비교육
                        </span>
                         </li>
                        <li style={{ width: "180px" }}>
                         <span className="pagination-bullet e-select-bullet hero-bullet" data-id="59">
                         신규 강의 🎁
                         </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="579">
                            강의 추천 🧞
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="730">
                             AI 국비교육
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="60">
                            지금 할인중 💸
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="236">
                             지식공유신청
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="137">
                             인프런 동료찾기
                        </span>
                        </li>
                        <li style={{ width: "180px" }}>
                        <span className="pagination-bullet e-select-bullet hero-bullet" data-id="87">
                            인프런은 🌱
                        </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    );
}

export default MovingBanner;
