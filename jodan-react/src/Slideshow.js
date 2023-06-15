import React, { useState, useEffect } from "react";

function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    function showSlide(n) {
      if (n < 0) {
        setCurrentSlide(slides.length - 1);
      } else if (n >= slides.length) {
        setCurrentSlide(0);
      } else {
        setCurrentSlide(n);
      }
    }

    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPrevSlide() {
      showSlide(currentSlide - 1);
    }

    const interval = setInterval(() => {
      showNextSlide();
    }, 3000);

    function handleDotClick(index) {
      showSlide(index);
    }

    slides.forEach((slide, index) => {
      if (index === currentSlide) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });

    dots.forEach((dot, index) => {
      if (index === currentSlide) {
        dot.classList.add("active");
      } else {
        dot.classList.remove("active");
      }
    });

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EA%B3%A0%EC%96%91%EC%9D%B4">
              <img className="cat" src="slide1.jpg" alt="Image 1" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EA%B0%95%EC%95%84%EC%A7%80">
              <img className="cat" src="slide2.jpg" alt="Image 2" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide3.jpg" alt="Image 3" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide4.jpg" alt="Image 4" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide5.jpg" alt="Image 5" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide6.jpg" alt="Image 6" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide7.jpg" alt="Image 6" />
            </a>
          </div>      <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide8.jpg" alt="Image 6" />
            </a>
          </div>
            <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide9.jpg" alt="Image 9" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide10.jpg" alt="Image 10" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide11.jpg" alt="Image 11" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide12.jpg" alt="Image 12" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide13.jpg" alt="Image 13" />
            </a>
          </div>
          <div className="slide fade">
            <a href="https://ko.wikipedia.org/wiki/%EC%95%B5%EB%AC%B4%EC%83%88">
              <img className="cat" src="slide14.jpg" alt="Image 14" />
            </a>
          </div>
        </div>
      );
    }
    
    export default Slideshow;
    