import React, { useEffect } from 'react';

const SocialKakao = () => {
  const Rest_api_key = '3ffe35ece409b27df73dd1a0f4404da2'; // REST API KEY
  const redirect_uri = 'http://localhost:3000/auth'; // Redirect URI
  const code = new URL(window.location.href).searchParams.get('code');

  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${'3ffe35ece409b27df73dd1a0f4404da2'}&redirect_uri=${'http://localhost:3000/auth'}&response_type=code`;

  useEffect(() => {
    const handleLoginSuccess = () => {
      // 로그인 성공 메시지를 표시하는 로직을 여기에 작성합니다.
      console.log('로그인되었습니다.');
    };

    if (code) {
      // 인가 코드가 존재하면 로그인 성공으로 처리합니다.
      handleLoginSuccess();
    }
  }, [code]);

  const handleLogin = () => {
    window.location.href = kakaoURL;
  };

  return (
    <>
      <button onClick={handleLogin}>카카오 로그인</button>
    </>
  );
};

export default SocialKakao;
