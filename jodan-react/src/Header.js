import { Link , Switch } from 'react-router-dom';
import React from 'react';
function Header() {
  return (
    
    <div id="header">
      <div id="header_wrab">
        <div className="header_content">
          <ul className="header_content_left">
            <li>
              <Link className="non_purple" to="https://www.inflearn.com/">
                <svg width="20" height="20" xmlns="http://www.w3.org/1999/xlink">
                  <image href="inflearn_img_logo.svg"></image>
                </svg>
                교육 |
              </Link>
            </li>
            <li className="shell">
              <Link className="non_purple" to="https://www.rallit.com/">
                <svg width="20" height="20" xmlns="http://www.w3.org/1999/xlink">
                  <image href="rallit_img_logo.svg"></image>
                </svg>
                채용
              </Link>
            </li>
          </ul>
        </div>
        <div className="header_content">
          <ul>
            <li className="header_content_right">
              <a className="non_purple" href="https://www.inflearn.com/open-knowledge">지식공유 참여</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;