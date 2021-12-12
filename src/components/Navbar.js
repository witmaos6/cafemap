/* src/components/Navbar.js */

import React, { useEffect, useState } from 'react';
import './Navbar.css';
import Home from '../pages/Home';
/* 아이콘 컬러 전체 변경 기능 */
import { IconContext } from 'react-icons';
function Navbar({name}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [InputText, setInputText]=useState('')
    const [Place, setPlace]=useState('')

    // e.target.value는 선택 한 값이 반환됨
    const onChange=(e)=>{
        setInputText(e.target.value)
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    };
    const onChange_gender = e => {
        console.log(e.target.value);
    };
    const onChange_sex = e => {
        console.log(e.target.value);
    };

    useEffect(() => {console.log(name)}, [name]);
    return (
        <>
            {/* 아이콘 컬러 전체 변경 기능 */}
            <IconContext.Provider value={{ color: '#fff' }}>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className="nav-menu-items">
                        <body>
                            <div>카페- 탐색기-</div>

                            <div>
                                <form className="inputForm" onSubmit={handleSubmit}>
                                    <input placeholder="검색어를 입력하세요" onChange={onChange} value={InputText} />
                                    <button type="submit">검색</button>
                                </form>
                                <div>

                                </div>
                                <div>선택된 목적지는</div>
                            </div>
                                <input></input>
                            <div>
                                
                            </div>
                            <section id="theme">
                                <select onChange_gender={onChange_gender}>
                                    <option value="10대">10대</option>
                                    <option value="20대">20대</option>
                                    <option value="30대">30대</option>
                                    <option value="40대">40대</option>
                                    <option value="50대 이상">50대 이상</option>
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
            <Home searchPlace={Place}/>
        </>
    );
}
export default Navbar;