const slideshowContainer = document.getElementById("slideshow-container");
const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");
const stopBtn = document.getElementById("stop-btn");

let slideIndex = 0;
let isAutoSlideEnabled = true;
let intervalId;

function showSlide(n) {
  const movingIcons = document.querySelectorAll('.moving_icon');
  movingIcons.forEach(icon => icon.classList.remove('active'));

  for (let i = 0; i <= slides.length; i++) {
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

const movingIcons = document.querySelectorAll('.moving_icon');
movingIcons.forEach((icon, index) => {
    icon.addEventListener('click', () => {
        // Remove the active class from all icons
        movingIcons.forEach((icon) => {
            icon.classList.remove('active');
        });
        // Add the active class to the clicked icon
        icon.classList.add('active');
        // Show the corresponding slide
        showSlide(index);
    });
});

// Update the active icon when the slide changes
function updateActiveIcon() {
    // Remove the active class from all icons
    movingIcons.forEach((icon) => {
        icon.classList.remove('active');
    });
    // Add the active class to the current icon
    const currentIcon = movingIcons[slideIndex];
    currentIcon.classList.add('active');
}


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


function toggleAutoSlide() {
  isAutoSlideEnabled = !isAutoSlideEnabled;
  const stopBtnIcon = stopBtn.querySelector("i");
  
  if (isAutoSlideEnabled) {
    intervalId = setInterval(advanceSlides, 4000);
    stopBtn.classList.remove("paused");
    stopBtnIcon.className = "fa fa-stop";
  } else {
    clearInterval(intervalId);
    stopBtn.classList.add("paused");
    stopBtnIcon.className = "fa fa-play";
  } 
}

function updateIndexIndicator() {
  const currentIndexElem = document.querySelector(".current_index");
  const totalIndexElem = document.querySelector(".total_index");
  
  currentIndexElem.textContent = slideIndex + 1;
  totalIndexElem.textContent = slides.length;
}

nextBtn.addEventListener("click", advanceSlides);
prevBtn.addEventListener("click", reverseSlides);
stopBtn.addEventListener("click", toggleAutoSlide);

intervalId = setInterval(advanceSlides, 4000);
slideIndex = 0; // set initial slide index to 0
showSlide(slideIndex);
updateIndexIndicator();
