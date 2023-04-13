import React, { useState } from 'react';

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((index + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((index + images.length - 1) % images.length);
  };

  return (
    <div className="slideshow-container">
      <div className={`slide ${index === 0 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%96%91%EC%9D%B4">
          <img className="cat" src="slide1.jpg" alt="Image 1" />
        </a>
      </div>
      <div className={`slide ${index === 1 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EA%B0%95%EC%95%84%EC%A7%80">
          <img className="cat" src="slide2.jpg" alt="Image 2" />
        </a>
      </div>
      <div className={`slide ${index === 2 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide3.jpg" alt="Image 3" />
        </a>
      </div>
      <div className={`slide ${index === 3 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide4.jpg" alt="Image 4" />
        </a>
      </div>
      <div className={`slide ${index === 4 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide5.jpg" alt="Image 5" />
        </a>
      </div>
      <div className={`slide ${index === 5 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide6.jpg" alt="Image 6" />
        </a>
      </div>
      <div className={`slide ${index === 6 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide7.jpg" alt="Image 7" />
        </a>
      </div>
      <div className={`slide ${index === 7 ? 'fade' : ''}`}>
        <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide8.jpg" alt="Image 8" />
        </a>
      </div>
      <div className={`slide ${index === 8 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide9.jpg" alt="Image 9"/>
        </a>
      </div>
      <div className={`slide ${index === 9 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide10.jpg" alt="Image 10"/>
        </a>
      </div>
      <div className={`slide ${index === 10 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide11.jpg" alt="Image 11"/>
        </a>
      </div>
      <div className={`slide ${index === 11 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide12.jpg" alt="Image 12"/>
        </a>
      </div>
      <div className={`slide ${index === 12 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide13.jpg" alt="Image 13"/>
        </a>
      </div>
      <div className={`slide ${index === 13 ? 'fade' : ''}`}>
        <a href="https://en.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
          <img className="cat" src="slide14.jpg" alt="Image 14"/>
        </a>
      </div>
    </div>
  );
}

export default Slideshow;
