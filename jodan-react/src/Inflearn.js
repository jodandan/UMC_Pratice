import { useState, useEffect } from 'react';

function Inflearn() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [isAutoSlideEnabled, setIsAutoSlideEnabled] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  
  const slides = [
    { id: 1, imageSrc: 'slide1.jpg' },
    { id: 2, imageSrc: 'slide2.jpg' },
    { id: 3, imageSrc: 'slide3.jpg' },
  ];

  const toggleAutoSlide = () => {
    setIsAutoSlideEnabled(!isAutoSlideEnabled);
  };

  const advanceSlides = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const reverseSlides = () => {
    setSlideIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const showSlide = (index) => {
    const movingIcons = document.querySelectorAll('.moving_icon');
    movingIcons.forEach((icon) => icon.classList.remove('active'));

    for (let i = 0; i <= slides.length; i++) {
      if (slides[i]) {
        if (i === index) {
          slides[i].style.transform = 'translateX(0%)';
        } else if (i < index) {
          slides[i].style.transform = 'translateX(-100%)';
        } else if (i === slides.length - 1 && index === 0) {
          slides[i].style.transform = 'translateX(100%)';
        } else {
          slides[i].style.transform = 'translateX(100%)';
        }
      }
    }

    updateIndexIndicator(index);
  };

  const updateActiveIcon = () => {
    const movingIcons = document.querySelectorAll('.moving_icon');
    movingIcons.forEach((icon) => icon.classList.remove('active'));
    const currentIcon = movingIcons[slideIndex];
    currentIcon.classList.add('active');
  };

  const updateIndexIndicator = (index) => {
    const currentIndexElem = document.querySelector('.current_index');
    const totalIndexElem = document.querySelector('.total_index');

    currentIndexElem.textContent = index + 1;
    totalIndexElem.textContent = slides.length;
  };

  const handleIconClick = (index) => {
    setSlideIndex(index);
    showSlide(index);
    updateActiveIcon();
  };

  useEffect(() => {
    if (isAutoSlideEnabled) {
      const id = setInterval(advanceSlides, 4000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
    }
    return () => clearInterval(intervalId);
  }, [isAutoSlideEnabled]);

  return (
    <>
      <div id="slideshow-container">
        {slides.map((slide) => (
          <div className="slide" key={slide.id}>
            <img src={slide.imageSrc} alt={`Slide ${slide.id}`} />
          </div>
        ))}
        <div className="icon-container">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`moving_icon${index === 0 ? ' active' : ''}`}
              onClick={() => handleIconClick(index)}
            >
              <img src={slide.imageSrc} alt={`Slide ${slide.id}`}/>
      </div>
      ))}
    </div>
    <button id="prev-btn" onClick={reverseSlides}>
      <i className="fa fa-chevron-left"></i>
    </button>
    <button id="next-btn" onClick={advanceSlides}>
      <i className="fa fa-chevron-right"></i>
    </button>
    <button id="stop-btn" onClick={toggleAutoSlide}>
      <i className="fa fa-stop"></i>
    </button>
  </div>
  <div className="index-container">
    <span className="current_index">{slideIndex + 1}</span> /{" "}
    <span className="total_index">{slides.length}</span>
  </div>
  <div className="show-more-container">
    <div className="show-more-list">
      <ul>
        {showMoreListItems.map((item) => (
          <li key={item.id}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
    <div className="toggleButton" onClick={handleToggleClick}>
      <span>{showMoreContainer.style.display === "none" ? "Show More" : "Hide"}</span>
    </div>
    <div className="e-close-show-more" onClick={handleCloseClick}>
      <span>X</span>
    </div>
  </div>
</>
);
}

export default Inflearn;