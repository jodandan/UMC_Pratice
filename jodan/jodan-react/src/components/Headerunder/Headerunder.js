import React from 'react';

function Headunder() {
  return (
    <div id="header_under">
      <div id="header_under_content">
        <div className="inflearnlogo">
          <a href="https://www.inflearn.com/">
            <svg width="110" viewBox="0 0 433 90" xmlns="http://www.w3.org/1999/xlink">
              <image href="인프런 브랜드 로고.svg"></image>
            </svg>
          </a>
        </div>

        <div className="header_under_content_menu">
            <div className="course">
                <div className="dropdown">
                    <button className="dropbtn change_green lecture">강의</button>
                    <div className="dropdown-content">
                        <a href="https://www.inflearn.com/community/questions">
                         <span>질문 &amp; 답변</span>
                        </a>
                        <a href="https://www.inflearn.com/community/chats">
                         <span>자유주제</span>
                        </a>
                        <a href="https://www.inflearn.com/community/studies">
                          <span>스터디</span>
                        </a>
                        <a href="https://www.inflearn.com/community/projects">
                         <span>팀 프로젝트</span>
                         </a>
                        <a href="https://www.inflearn.com/blogs">
                         <span>블로그</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="loadmap">
                <a className="change_green" href="https://www.inflearn.com/roadmaps">로드맵</a>
            </div>
            <div className="mentoring">
                 <a className="change_green" href="https://www.inflearn.com/mentors">멘토링</a>
            </div>
            <div className="comunite">
                <div className="dropdown">
                        <button className="dropbtn change_green">커뮤니티</button>
                    <div className="dropdown-content">
                        <a href="https://www.inflearn.com/community/questions">
                            <span><i className="fas fa-light fa-star"></i></span>
                            <span>질문 &amp; 답변</span>
                        </a>
                        <a href="https://www.inflearn.com/community/chats">
                            <span><i className="fas fa-light fa-star"></i></span>
                            <span>자유주제</span>
                        </a>
                        <a href="https://www.inflearn.com/community/studies">
                            <span><i className="fas fa-light fa-star"></i></span>
                            <span>스터디</span>
                        </a>
                        <a href="https://www.inflearn.com/community/projects">
                            <span><i className="fas fa-light fa-star"></i></span>
                            <span>팀 프로젝트</span>
                        </a>
                        <a href="https://www.inflearn.com/blogs">
                            <span><i className="fas fa-light fa-star"></i></span>
                            <span>블로그</span>
                        </a>
                 </div>
                </div>
            </div>
            <div className="inflean">
                <div className="dropdown">
                    <button className="dropbtn change_green">인프런</button>
                        <div className="dropdown-content">
                            <a href="https://www.inflearn.com/community/reviews">
                            <span>
                                <i className="fas fa-light fa-star"></i>
                            </span>
                            <span>
                                수강평
                            </span>
                            </a>
                            <a href="https://www.inflearn.com/community/mentorings-reviews">
                            <span>
                                <i className="fas fa-light fa-lightbulb"></i>
                            </span>
                            <span>
                                  멘토링 후기
                            </span>
                            </a>
                            <a href="https://www.inflearn.com/pages">
                            <span>
                                <i className="fas fa-thin fa-paper-plane"></i>
                            </span>
                            <span>
                                인프런 피드
                            </span>
                            </a>                        
                            <a href="https://www.inflearn.com/request-to-inflearn">
                            <span>
                                <i className="fas fa-regular fa-comment-smile"></i>
                            </span>
                            <span>
                                강의,기능 요청
                            </span>
                             </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header_under_content_menu_right">
                <div className="searchbox">
                    <div className="search">
                        <input className="textbox" type="text" />
                        <img className="in_textbox" src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
                    </div>
                </div>
            </div>

            <div className="loginbox">
                <a role="button" className="loginbox_login">로그인</a>
                <a className="loginbox_login_right">회원가입</a>
            </div>
        </div>
    </div> 
  );
}

export default Hereunder;