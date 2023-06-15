import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faStop, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function MovingBanner() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const totalIndex = 13; // total number of moving icons

  function handlePrevClick() {
    setCurrentIndex(prevIndex => prevIndex - 1);
  }

  function handleStopClick() {
    // add logic to stop moving banner animation
  }

  function handleNextClick() {
    setCurrentIndex(prevIndex => prevIndex + 1);
  }

  return (
    <div>
      <div className="controller">
        <div className="index-indicator">
          <span className="current_index">{currentIndex}</span>
          / 
          <span className="total_index">{totalIndex}</span>
        </div>
        <div className="controller_button">
          <button type="button" id="prev-btn" onClick={handlePrevClick}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button type="button" id="stop-btn" onClick={handleStopClick}>
            <FontAwesomeIcon icon={faStop} />
          </button>
          <button type="button" id="next-btn" onClick={handleNextClick}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
      <div className="divider"></div>
      <div className="moving_banner">
        <div className="moving_banner_icon" id="movingBannerIcon">
          <span className={`moving_icon ${currentIndex === 1 ? 'active' : ''}`}>7th창립기념일🍀</span >
          <span className={`moving_icon ${currentIndex === 2 ? 'active' : ''}`}>로드맵 🌱</span >
          <span className={`moving_icon ${currentIndex === 3 ? 'active' : ''}`}>무료 부트캠프</span >
          <span className={`moving_icon ${currentIndex === 4 ? 'active' : ''}`}>3시간 완강 가능!</span >
          <span className={`moving_icon ${currentIndex === 5 ? 'active' : ''}`}>Top 50 👑</span >
          <span className={`moving_icon ${currentIndex === 6 ? 'active' : ''}`}>왕초보 모여라 😎</span >
          <span className={`moving_icon ${currentIndex === 7 ? 'active' : ''}`}>클라우드 국비교육</span >
          <span className={`moving_icon ${currentIndex === 8 ? 'active' : ''}`}>신규 강의 🎁</span >
          <span className={`moving_icon ${currentIndex === 9 ? 'active' : ''}`}>강의 추천 🧞</span >
          <span className={`moving_icon ${currentIndex === 10 ? 'active' : ''}`}>AI 국비교육</span >
          <span className={`moving_icon ${currentIndex === 11 ? 'active' : ''}`}>지금 할인중 💸</span >
          <span className={`moving_icon ${currentIndex === 12 ? 'active' : ''}`}>지식공유신청</span >
          <span className={`moving_icon ${currentIndex === 13 ? 'active' : ''}}>인프런 동료찾기</span > <span className={moving_icon ${currentIndex === 14 ? 'active' : ''}`}>인프런은 🌱</span>
        </div>
        <div className="moving_banner_icon_leftline" style={{display: 'block'}}>
        </div>
       <div className="moving_banner_icon_rightline" style={{display: 'block'}}>

       </div>
      </div>
      <div className="divider"></div>
      <div className="controller">
        <div className="index-indicator">
          <span className="current_index">{currentIndex}</span>
          /
          <span className="total_index">{totalIndex}</span>
        </div>
        <div className="controller_button">
          <button type="button" id="prev-btn" onClick={() => handlePrev()}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button type="button" id="stop-btn" onClick={() => handleStop()}>
            <i className="fas fa-stop"></i>
          </button>
          <button type="button" id="next-btn" onClick={() => handleNext()}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      </div>  
  );
}
export default MovingBanner;