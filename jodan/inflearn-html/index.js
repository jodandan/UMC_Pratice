



const toggleButton = document.getElementById("toggleButton");
const showMoreContainer = document.querySelector(".show-more-container");
const closeButton = document.querySelector('.e-close-show-more');
const showMoreList = document.querySelector('.show-more-list');
const showmorebox = document.querySelector('.show-more-box');

/*진행중인 이벤트 버튼*/ 
toggleButton.addEventListener("click", () => {
  showMoreContainer.style.display = showMoreContainer.style.display === "none" ? "block" : "none";

});
// 이벤트 더보기 누르면 초록색 활성화되는 함수 
toggleButton.addEventListener('click', () => {
  toggleButton.classList.toggle('active');
});



// 진행중인 이벤트 버튼 안에있는 닫기 버튼
closeButton.addEventListener("click", () => {
  showMoreContainer.style.display = "none";
});

//=================================================================
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const stopBtn = document.getElementById("stop-btn");
const slideshowContainer = document.getElementById("slideshow-container");
const slides = document.querySelectorAll('.slide');
const iconsContainer = document.querySelector('.moving_banner_icon');
const icons = document.querySelectorAll('.moving_icon');
const iconWidth = icons[0].offsetWidth; // 아이콘의 너비
const margin = 10; // 각 아이콘 사이의 간격
const borderWidth = 2; // 초록색 테두리 두께

let slideIndex = 1;
let currentIndex = 0;
let currentPosition = 0;

// 사진 하나씩 이동하는 함수 
function showSlide(n) {
  const movingIcons = document.querySelectorAll('.moving_icon');
  movingIcons.forEach(icon => icon.classList.remove('active'));

  for (let i = 0; i < slides.length; i++) {
    if (slides[i]) {
      if (i === slideIndex) {
        slides[i].style.transform = "translateX(0%)";
      } else if (i < slideIndex) {
        slides[i].style.transform = "translateX(-100%)";
      } else if (i === slides.length - 1 && slideIndex === 0) {
        slides[i].style.transform = "translateX(100%)";
      } else {
        slides[i].style.transform = "translateX(100%)";
      }
    }
  }
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  
  updateIndexIndicator();
}

// 초록색 테두리를 씌우는 함수
function setBorder(index) {
  icons[index].style.border = `${borderWidth}px solid #00c471`;
  icons[index].classList.add('active');
}

// 초록색 테두리를 제거하는 함수
function removeBorder(index) {
  icons[index].style.border = 'none';
  icons[index].classList.remove('active');
}

// 다음 아이콘을 활성화하고 이전 아이콘의 초록색 테두리를 제거하는 함수
// 아이콘 이동 함수 수정
function moveIcon() {
  if (!isIconMoveEnabled) return;
  removeBorder(currentIndex);
  currentIndex = (currentIndex + 1) % icons.length;
  setBorder(currentIndex);
  currentPosition -= (iconWidth + margin);
  iconsContainer.style.transform = `translateX(${currentPosition}px)`;
  showSlide(slideIndex);
  if (currentIndex === 0) {
    currentPosition = 0;
    iconsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
  else if (currentIndex === slideIndex) { // 현재 아이콘이 선택된 슬라이드와 일치할 때 currentPosition 갱신
    currentPosition = -((iconWidth + margin) * currentIndex);
    iconsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}




// 초록색 테두리 초기화
removeBorder(currentIndex);
setBorder(0);

// 일정 간격으로 아이콘 이동 및 초록색 테두리 변경
setInterval(moveIcon, 4000);

let intervalId;
let isIconMoveEnabled = true; // 아이콘 이동 여부 추가
let isAutoSlideEnabled = true;

let currentSlideIndex = slideIndex;
let currentIconIndex = currentIndex;

function toggleAutoSlide() {
  isAutoSlideEnabled = !isAutoSlideEnabled;
  const stopBtnIcon = stopBtn.querySelector("i");
  
  if (isAutoSlideEnabled) {
    intervalId = setInterval(advanceSlides, 4000);
    stopBtn.classList.remove("paused");
    stopBtnIcon.className = "fa fa-stop";
    isIconMoveEnabled = true; // 아이콘 이동 다시 시작
  } else {
    clearInterval(intervalId); // 슬라이더 자동 재생 중지
    stopBtn.classList.add("paused");
    stopBtnIcon.className = "fa fa-play";
    isIconMoveEnabled = false; // 아이콘 이동 중지
    showSlide(slideIndex); // 사진 슬라이더 이동
  } 
}

stopBtn.addEventListener("click", toggleAutoSlide);

// =======아이콘 클릭 시 해당하는 사진으로 이동============
icons.forEach((icon, index) => {
  icon.addEventListener('click', () => {
    // 현재 활성화된 아이콘의 테두리 제거
    removeBorder(currentIndex);
    // 클릭한 아이콘에 초록색 테두리 적용
    setBorder(index);
    // 현재 인덱스 갱신
    currentIndex = index;
    // 현재 위치 갱신
    currentPosition = -((iconWidth + margin) * currentIndex);
    iconsContainer.style.transform = `translateX(${currentPosition}px)`;
    // 사진 슬라이더 이동
    slideIndex = currentIndex;
    showSlide(slideIndex);
  });
});

//===============인덱스 번호 나타내는 함수====================
function updateIndexIndicator() {
  const currentIndexElem = document.querySelector(".current_index");
  const totalIndexElem = document.querySelector(".total_index");
  
  currentIndexElem.textContent = slideIndex + 1;
  totalIndexElem.textContent = slides.length;
};

//==================다음 버튼 =========================

nextBtn.addEventListener("click", function() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  moveIcon(); // 아이콘 이동
  showSlide(slideIndex); // 슬라이드 이동
  updateIndexIndicator();
  updateActiveIcon();
});


//==============사진슬라이더 다음으로 넘어가는 함수================
function advanceSlides() {
  slideIndex++;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  showSlide(slideIndex);
  updateIndexIndicator();
  updateActiveIcon();
}

// ======아이콘 뒤로 가는 기능============
function reverseIcon() {
  removeBorder(currentIndex);
  if (currentIndex === 0) { // 현재 아이콘이 첫번째인 경우
    currentIndex = icons.length - 1; // 마지막 아이콘으로 변경
    currentPosition = -((iconWidth + margin) * (icons.length - 1)); // 마지막 아이콘 위치로 이동
  } else {
    currentIndex = (currentIndex - 1) % icons.length;
    currentPosition += (iconWidth + margin);
  }
  setBorder(currentIndex);
  iconsContainer.style.transform = `translateX(${currentPosition}px)`;
}
//=========이전으로 가는 버튼함수================
prevBtn.addEventListener("click", function() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  reverseIcon(); // 아이콘 이동
  showSlide(slideIndex); // 슬라이드 이동
  updateIndexIndicator();
  updateActiveIcon();
});

//==========================================
intervalId = setInterval(() => {
  if (isAutoSlideEnabled) {
    advanceSlides();
    moveIcon();
  }
}, 4000);
slideIndex = 0; // set initial slide index to 0
showSlide(slideIndex);
updateIndexIndicator();




