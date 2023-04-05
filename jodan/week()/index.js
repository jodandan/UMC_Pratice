/*
// "slide" 클래스를 가진 모든 요소를 선택해서 slides 배열에 저장
const slides = document.querySelectorAll(".slide");
console.log(slides);
// 슬라이드 인덱스 초기값을 0으로 설정
let slideIndex = 0;

// 슬라이드 인덱스에 해당하는 슬라이드를 보여주는 함수 정의
function showSlide(n) {
  // 모든 슬라이드에 대해 반복
  for (let i = 0; i < slides.length; i++) {
    // 현재 슬라이드가 존재하면
    if (slides[i]) {
      // "fade" 클래스를 제거하여 페이드아웃 효과로 해당 슬라이드를 숨김
      slides[i].classList.remove("fade");
      // 슬라이드의 display 속성을 "none"으로 설정하여 숨김
      slides[i].style.display = "none";
    }
  }
  // 지정한 슬라이드 인덱스가 존재하면
  if (slides[n]) {
    // "fade" 클래스를 추가하여 페이드인 효과로 해당 슬라이드를 보여줌
    slides[n].classList.add("fade");
    // 슬라이드의 display 속성을 "block"으로 설정하여 보여줌
    slides[n].style.display = "block";
  }
}

// 다음 슬라이드로 이동하는 함수 정의
function advanceSlides() {
  // 슬라이드 인덱스에 1을 더함
  slideIndex++;
 // 슬라이드 인덱스가 슬라이드에 비해 클수록 0으로 재설정됨.
 if (slideIndex >= slides.length) {
  slideIndex = 0;
}
// 업데이트된 슬라이드 인덱스으로 슬라이드 표시
showSlide(slideIndex);
}

// advanceSlides 함수를 5초마다 한번씩 실행함으로써 슬라이드를 자동으로 전환.
setInterval(advanceSlides, 5000);
*/