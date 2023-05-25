import React, { useState } from 'react';
import Values from 'values.js';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const ColorGenerator = () => {
  const [colorCode, setColorCode] = useState('');
  const [convertedColors, setConvertedColors] = useState([]);

  const handleColorCodeChange = (event) => {
    const newColorCode = event.target.value; 
    setColorCode(newColorCode);
    //입력된 값을 가져와 setColorCode를 사용하여 colorCode 상태 변수를 업데이트
    try {
      const color = new Values(newColorCode);
      const convertedColors = color.all(10);
      //try-catch 문을 사용하여 newColorCode 값을 Values 클래스의 인스턴스로 생성한 후, 
      //color.all(10) 메서드를 사용하여 해당 색상을 기반으로 변환된 10개의 색상을 얻습니다.
      setConvertedColors(convertedColors);
      //환된 색상들은 setConvertedColors를 통해 convertedColors 상태 변수에 저장됨
    } catch (error) {
      setConvertedColors([]);
    }
  };

  const handleCopyToClipboard = (colorCode) => { //클립보드로 색상 코드를 복사하는 동작을 처리하는 함수
    console.log(`Copied to clipboard: ${colorCode}`);
  };

  return (
    <section className="section">
      <div className="container"> 
      {/* 컨트롤 패널을 포함하는 태그 */}
        <h3>Color Generator</h3>
        <input
          type="text"
          value={colorCode}
          onChange={handleColorCodeChange}
          placeholder="Enter color code"
        />
        <button className="btn">Generate</button>
      </div>

      <div className="colors">
      {/* 변환된 색상들을 표시하는 영역 */}
        {convertedColors.map((color, index) => ( 
            // map 함수를 사용하여 순회하면서 각 색상을 나타내는 div.color 요소를 생성.
          <CopyToClipboard //CopyToClipboard 컴포넌트를 사용하여 색상 코드를 클립보드로 복사할 수 있도록 구현.
            key={index}
            text={color.hexString()}
            onCopy={handleCopyToClipboard}
          >
            <div
              className={`color ${color.type === 'tint' ? 'color-light' : ''}`} //color.type이 'tint'인 경우에는 color-light 클래스를 추가.
              style={{ backgroundColor: color.hexString() }} //color.hexString()은 해당 색상의 16진수 표기법을 반환하는 메서드
            >
              <p className="percent-value">{color.weight}%</p> 
              {/* 변환된 색상의 가중치(변환 비율)를 나타내는 p 요소, color.weight를 통해 해당 가중치를 가져와 표시. */}
              <p className="color-value">{color.hexString()}</p>
              {/* color.hexString()을 사용하여 색상 코드를 가져와 표시됩니다. */}
            </div>
          </CopyToClipboard>
        ))}
      </div>
    </section>
  );
};

export default ColorGenerator;
