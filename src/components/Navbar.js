/* src/components/Navbar.js */

import React, { useState } from 'react';
import './Navbar.css';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    // e.target.value는 선택 한 값이 반환됨
    const onChange = e => {
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
                                <select onChange={onChange}>
                                    <option value="9세 이하">9세 이하</option>
                                    <option value="10대">10대</option>
                                    <option value="20대">20대</option>
                                    <option value="30대">30대</option>
                                    <option value="40대">40대</option>
                                    <option value="50대">50대</option>
                                    <option value="60대 이상">60대 이상</option>
                                </select>
                            </section>
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