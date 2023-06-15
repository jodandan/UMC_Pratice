import axios from 'axios';

// 로그인 함수
const login = async (username, password) => {
  try {
    const response = await axios.post('/login', {
      username: username,
      password: password
    });

    if (response.data.success) {
      const jwt = response.data.jwt;
      // 여기서 받아온 JWT를 사용합니다.
      // 예시로는 localStorage에 저장하겠습니다.
      localStorage.setItem('jwt', jwt);
      console.log('로그인 성공');
    } else {
      console.log('로그인 실패');
    }
  } catch (error) {
    console.log('로그인 과정에서 오류 발생:', error);
  }
};

// 사용자명과 비밀번호를 입력하여 로그인 함수 호출
login('사용자명', '비밀번호');
