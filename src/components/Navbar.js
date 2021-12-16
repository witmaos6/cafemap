/* src/components/Navbar.js */

import React, { useState } from 'react';
import './Navbar.css';


import { IconContext } from 'react-icons';
function Navbar({ name, setPlace, }) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [InputText, setInputText] = useState('');
    const btnStyle1 = {
        color: "white",
        background: "#966A4C",
        padding: "10px 10px",
        border: "5px, black",
        borderRadius: ".25rem",
        fontSize: "1.2rem",
        lineHeight: 1,
        margin : "10px",
        width: "180px",
        height: "40px",
        top : "50px",
        left : "-20px",
        position : "relative"

        
      };
      const btnStyle2 = {
        color: "white",
        background: "#966A4C",
        padding: "10px 10px",
        border: "1px, black",
        borderRadius: ".25rem",
        fontSize: "1.8rem",
        lineHeight: 1.5,
        margin : "10px",
        width: "250px",
        height: "100px",
        top : "380px",
        left : "-50px",
        position : "relative"
      };
      const btnStyle3 = {
        color: "black",
        background: "white",
        padding: "10px 10px",
        border: "1px",
        borderRadius: ".25rem",
        lineHeight: 1.5,
        margin : "5px",
        width: "150px",
        height: "30px",
        top : "50px",
        left : "-10px",
        position : "relative"
      };
      const btnStyle4 = {
        color: "black",
        background: "white",
        padding: "10px 10px",
        border: "1px",
        fontSize: "1.2rem",
        lineHeight: 1,
        margin : "10px",
        width: "250px",
        height: "50x",
        left : "-50px",
        top : "310px",
        position : "relative"
      };
      const btnStyle5 = {
        color: "black",
        background: "white",
        padding: "10px 10px",
        border: "1px",
        fontSize: "1rem",
        lineHeight: 1,
        margin : "10px",
        width: "230px",
        height: "40px",
        top : "80px",
        left : "-50px",
        position : "relative",
        text_align : "center",
        align : "center"
      };
      const btnStyle6 = {
        color: "black",
        background: "white",
        padding: "10px 10px",
        border: "1px",
        fontSize: "1.2rem",
        lineHeight: 1,
        margin : "10px",
        width: "250px",
        height: "60px",
        top : "90px",
        left : "-50px",
        position : "relative"
      };
      const btnStyle7 = {
        color: "White",
        background: "none",
        padding: "10px 10px",
        border: "10px, black",
        borderRadius: ".25rem",
        fontSize: "3rem",
        lineHeight: 1,
        margin : "10px",
        width: "150px",
        height: "100px",
        top : "0px",
        left : "-15px",
        position : "relative"
      };

    function protoMap() {
        console.log("히히 못 가");
    }

    // e.target.value는 선택 한 값이 반환됨
    const onChange = e => {
        setInputText(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        setPlace(InputText);
        setInputText('');
    };
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
                            <div style={btnStyle7}>카페 탐색기</div>
        
                            <div>
                                <form className="inputForm" onSubmit={handleSubmit}>
                                    <input placeholder="목적지를 입력하세요" onChange={onChange} value={InputText} style={btnStyle3}></input>
                                    <button type="submit" style={btnStyle1}>검색</button>
                                </form>
                            
                            </div>
                            <input type="text" placeholder="선택한 목적지" value={name} disabled style={btnStyle5}/>
                            
                            
                            <section id="theme">
                                <select onChange_gender={onChange_gender} style={btnStyle4}>
                                    <option value="10대">10대</option>
                                    <option value="20대">20대</option>
                                    <option value="30대">30대</option>
                                    <option value="40대">40대</option>
                                    <option value="50대 이상">50대 이상</option>
                                    <option value="선택 안함">선택 안함</option>
                                </select>
                            </section>

                            
                            <section id="theme">
                                <select onChange_sex={onChange_sex} style={btnStyle6}>
                                    <option value="남성">남성</option>
                                    <option value="여성">여성</option>
                                    <option value="선택 안함">선택 안함</option>
                                </select>
                            </section>
                            
                            <div>
                                <button style={btnStyle2} onClick={protoMap}>추천 카페보기</button>
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