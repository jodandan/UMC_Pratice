


const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const stopBtn = document.getElementById("stop-btn");
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
  icons[index].style.border = `${borderWidth}px solid green`;
  icons[index].classList.add('active');
}

// 초록색 테두리를 제거하는 함수
function removeBorder(index) {
  icons[index].style.border = 'none';
  icons[index].classList.remove('active');
}

// 다음 아이콘을 활성화하고 이전 아이콘의 초록색 테두리를 제거하는 함수
function moveIcon() {
  removeBorder(currentIndex);
  currentIndex = (currentIndex + 1) % icons.length;
  setBorder(currentIndex);
  currentPosition -= (iconWidth + margin);
  iconsContainer.style.transform = `translateX(${currentPosition}px)`;

  
  if (isAutoSlideEnabled) { // 정지 버튼이 눌려있지 않을 때만 슬라이드를 이동시킵니다.
    showSlide(slideIndex);
  }
  showSlide(slideIndex); // 사진 슬라이드 업데이트
  if (currentIndex === 0) { // 고양이 아이콘이 15까지 이동한 후 다시 1부터 시작하도록 수정
    currentPosition = 0;
    iconsContainer.style.transform = `translateX(${currentPosition}px)`;
  }
}

// 초록색 테두리 초기화
removeBorder(currentIndex);
setBorder(0);

// 일정 간격으로 아이콘 이동 및 초록색 테두리 변경
setInterval(moveIcon, 4000);

let intervalId;
let isAutoSlideEnabled = true;

function toggleAutoSlide() {
  isAutoSlideEnabled = !isAutoSlideEnabled;
  const stopBtnIcon = stopBtn.querySelector("i");
  
  if (isAutoSlideEnabled) {
    intervalId = setInterval(advanceSlides, 4000);
    stopBtn.classList.remove("paused");
    stopBtnIcon.className = "fa fa-stop";
  } else {
    clearInterval(intervalId); // 아이콘이동을 중지합니다.
    stopBtn.classList.add("paused");
    stopBtnIcon.className = "fa fa-play";
  } 
  
  
}



stopBtn.addEventListener("click", toggleAutoSlide);
//=========================================
function advanceSlides() {
  slideIndex++;
  
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  showSlide(slideIndex);
  updateIndexIndicator();
  updateActiveIcon();
}
function reverseSlides() {
  slideIndex--;
  
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  
  showSlide(slideIndex);
  updateIndexIndicator();
  updateActiveIcon();
}




function updateIndexIndicator() {
  const currentIndexElem = document.querySelector(".current_index");
  const totalIndexElem = document.querySelector(".total_index");
  
  currentIndexElem.textContent = slideIndex + 1;
  totalIndexElem.textContent = slides.length;
}

nextBtn.addEventListener("click", advanceSlides);
prevBtn.addEventListener("click", reverseSlides);



intervalId = setInterval(advanceSlides, 4000);
slideIndex = 0; // set initial slide index to 0
showSlide(slideIndex);
updateIndexIndicator();

