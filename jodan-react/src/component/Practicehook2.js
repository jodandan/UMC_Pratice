import React, { useState } from 'react';

function Practicehook2() {
  const [inputValue, setInputValue] = useState('');
  const [displayValues, setDisplayValues] = useState(["정조은","정보리"]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value); // 입력 필드의 값
    //입력 필드의 값이 변경될 때마다 inputValue 상태를 업데이트하는 역할을 합니다.
  };

  const handleUploadClick = () => {
    setDisplayValues([inputValue, ...displayValues]); //배열의 앞에 inputValue를 추가
    //inputValue를 배열의 첫 번째 요소로 추가하고, 
    //그 뒤에 displayValues 배열을 펼쳐서 나머지 요소들을 추가합니다.
    // 이로써 기존의 배열을 변경하지 않고 새로운 배열을 생성합니다.
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleUploadClick}>Upload</button>
      {/* 상태 변수 inputValue의 값을 입력 필드의 초기 값으로 설정하는 역할을 합니다. */}
      <div>
        {displayValues.map((value, index) => (
          <div key={index}>{value}</div>
        ))}
      </div>
    </div>
  );
}

export default Practicehook2;
