window.addEventListener('resize', function() {
    // 스크린 크기 변경 시 실행될 함수 호출
  });

  window.addEventListener('resize', function() {
    var aElements = document.querySelectorAll('.loginbox a');
    var screenWidth = window.innerWidth; // 현재 화면 너비
  
    var scaleFactor = screenWidth / 1024; // 원하는 크기 변화 비율 계산
  
    // 요소의 크기 조정
    for (var i = 0; i < aElements.length; i++) {
      var originalFontSize = parseFloat(window.getComputedStyle(aElements[i]).fontSize);
      var newSize = originalFontSize * scaleFactor;
  
      aElements[i].style.fontSize = newSize + 'px';
    }
  });