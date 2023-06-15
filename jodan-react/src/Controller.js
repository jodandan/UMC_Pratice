import React, { useState } from 'react';
import "./Inflean.css";
import Slideshow from './Slideshow';


const slides = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg'
];
function Slider() {
  const [slideIndex, setSlideIndex] = useState(0);
  

  function handleNext() {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handlePrev() {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

function handleStop() {
  // 정지 버튼을 눌렀을 때 실행되는 함수
  // ...
}

return (
  <div className="controller">
    <div className="index-indicator">
      <span className="current_index">{slideIndex + 1}</span> /{" "}
      <span className="total_index">{slides.length}</span>
    </div>
    <div className="controller_button">
      <button type="button" id="prev-btn" onClick={handlePrev}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <button type="button" id="stop-btn" onClick={handleStop}>
        <i className="fas fa-stop"></i>
      </button>
      <button type="button" id="next-btn" onClick={handleNext}>
        <i className="fas fa-chevron-right"></i>
      </button>
    </div>
  </div>
);
}
export default Slider;