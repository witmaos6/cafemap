/* src/components/Navbar.js */

import React, { useState } from 'react';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // e.target.value는 선택 한 값이 반환됨
    const onChange_gender = e => {
        console.log(e.target.value);
    };
    const onChange_sex = e => {
        console.log(e.target.value);
    };
    return (
        <>
            {/* 아이콘 컬러 전체 변경 기능 */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <body>
                            <div>카페- 탐색기-</div>

                            <div>
                                <input />
                                <button>목적지 탐색</button>
                            </div>
                            <section id="theme">
                                <select onChange_gender={onChange_gender}>
                                    <option value="9세 이하">9세 이하</option>
                                    <option value="10대">10대</option>
                                    <option value="20대">20대</option>
                                    <option value="30대">30대</option>
                                    <option value="40대">40대</option>
                                    <option value="50대">50대</option>
                                    <option value="60대 이상">60대 이상</option>
                                    <option value="선택 안함">선택 안함</option>
                                </select>
                            </section>

                            <section id="theme">
                                <select onChange_sex={onChange_sex}>
                                    <option value="남성">남성</option>
                                    <option value="여성">여성</option>
                                    <option value="선택 안함">선택 안함</option>
                                </select>
                            </section>
                            <div>
                                <button>추천 카페보기!</button>
                            </div>
                        </body>

                        {/* SidebarData를 순서대로 담기
            {Sidebardata.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })} */}
                    </ul>
                    <button className="toggle-menu" onClick={showSidebar}></button>
                </nav>
            </IconContext.Provider>
        </>
    );
}
export default Navbar;