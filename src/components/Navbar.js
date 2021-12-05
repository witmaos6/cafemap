/* src/components/Navbar.js */

import React, { useState } from "react";
import "./Navbar.css";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            카페 탐색기 
            <hr></hr>
            <div>
              카페 탐색기라니 너무행
            </div>
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
          <button
            className="toggle-menu"
            onClick={showSidebar}
          ></button>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;
