/* src/components/Navbar.js */

import React, { useState } from "react";
import "./Navbar.css";
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from "react-icons";
function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const MenuDrop = (e) => {
    {
      const isActive = e.currentTarget.className.indexOf("active") !== -1;
      if (isActive) {
        e.currentTarget.className = "select";
      } else {
        e.currentTarget.className = "select active";
      }
    }

    document.querySelector("#theme .select").addEventListener("click", MenuDrop);
  }
  const ValueSelect = (e) => {
    const selectedValue = e.currentTarget.innerHTML;
    document.querySelector("#theme .text").innerHTML = selectedValue;

    var optionList = document.querySelectorAll("#theme .option");
    for (var i = 0; i < optionList.length; i++) {
      var option = optionList[i];
      option.addEventListener("click", ValueSelect);}
  }
  return (
    <>
      {/* 아이콘 컬러 전체 변경 기능 */}
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <body>
              <div>
                카페- 탐색기-
              </div>

              <div>
                <input />
                <button>목적지 탐색</button>
              </div>
              <section id="theme">
                <div class="select" onClick={ValueSelect}>
                  <div class="text" onClick={MenuDrop}>연령대 선택</div>
                  <ul class="option-list">
                    <li class="option">9세 이하</li>
                    <li class="option">10대</li>
                    <li class="option">20대</li>
                    <li class="option">30대</li>
                    <li class="option">40대</li>
                    <li class="option">50대</li>
                    <li class="option">60대 이상</li>
                  </ul>
                </div>
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