import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ToExamine from './pages/ToExamine';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import Home from './pages/Home';

import Floatingbutton from './components/Floatingbutton';

import './components/Navbar.css';
import { IconContext } from 'react-icons';

const { kakao } = window;

function Temp() {
    const [name, setName] = useState('');
    const [place, setPlace] = useState('');
    const markers = [];
    let select;

    const [Place, setPlaces] = useState([]);
    let map;
    let infowindow;

    function addMarker(pos) {
        const marker = new kakao.maps.Marker({
            map: map,
            position: pos
        });

        markers.push(marker);

        return marker;
    }
    
    // #region Home
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [InputText, setInputText] = useState('');
    // #region btn style
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
    // #endregion

    function protoMap() {
        var tempPositions = [
            {
                title: '피시야', 
                latlng: new kakao.maps.LatLng(33.544038, 126.673581)
            },
            {
                title: '사계', 
                latlng: new kakao.maps.LatLng(33.543936, 126.673181)
            },
            {
                title: '영심이랑카페랑', 
                latlng: new kakao.maps.LatLng(33.539767, 126.671779)
            },
            {
                title: '더로그',
                latlng: new kakao.maps.LatLng(33.449231, 126.559647)
            },
            {
                title: 'CAFE ROSIE',
                latlng: new kakao.maps.LatLng(33.460484, 126.562536)
            }
        ];

        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(null);
        }

        setPlaces([])
        setPlace('')

        while(markers.length > 0) {
            markers.pop();
        }
        
        for (let i = 0; i < tempPositions.length; i++) {
            const tempMarker = addMarker(tempPositions[i].latlng);
            
            kakao.maps.event.addListener(tempMarker, 'click', function () {
                let a = document.createElement('div');
                a.setAttribute('style', 'padding:15px;font-size:15px;');

                let content = document.createTextNode(tempPositions[i].title);
                a.appendChild(content);
                
                infowindow.setContent(a);
                infowindow.open(map, tempMarker);
            });
        }
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
    // #endregion

    // Home
    // #region Home
    function locationLoadSuccess(pos) {
        const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        map.panTo(currentPos);

        new kakao.maps.Marker({
            map: map,
            position: currentPos
        });
    }

    function locationLoadError(pos) {
        alert('위치 정보를 가져오지 못했습니다');
    }

    function getCurrentPosBtn() {
        navigator.geolocation.getCurrentPosition(locationLoadSuccess, locationLoadError);
    }
    function placesSearchCB(data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            let bounds = new kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
                displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            map.setBounds(bounds);
            // 페이지 목록 보여주는 displayPagination() 추가
            displayPagination(pagination);
            setPlaces(data);
        }
    }
    function displayPagination(pagination) {
        var paginationEl = document.getElementById('pagination'),
            fragment = document.createDocumentFragment(),
            i;

        // 기존에 추가된 페이지 번호 삭제
        while (paginationEl.hasChildNodes()) {
            paginationEl.removeChild(paginationEl.lastChild);
        }

        for (i = 1; i <= pagination.last; i++) {
            var el = document.createElement('a');
            el.href = '#';
            el.innerHTML = i;

            if (i === pagination.current) {
                el.className = 'on';
            } else {
                el.onclick = (function (i) {
                    return function () {
                        pagination.gotoPage(i);
                    };
                })(i);
            }

            fragment.appendChild(el);
        }
        paginationEl.appendChild(fragment);
    }

    function displayMarker(place) {
        let marker = addMarker(new kakao.maps.LatLng(place.y, place.x));
        kakao.maps.event.addListener(marker, 'click', function () {
            let a = document.createElement('div');
            a.setAttribute('style', 'padding:15px;font-size:15px;');

            let content = document.createTextNode(place.place_name);
            a.appendChild(content);

            let btn = document.createElement('button');
            btn.innerText = '목적지로 선택';
            btn.onclick = () => {
                setName(place.place_name);
            }
            a.appendChild(btn);
            btn.setAttribute('style','margin: 20px');
            
            infowindow.setContent(a);
            infowindow.open(map, marker);
        });
    }

    // useEffect 로 스크립트를 불러옴
    useEffect(() => {
        infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.499505, 126.53113),
            level: 7,
        };
        map = new kakao.maps.Map(container, options);
        const ps = new kakao.maps.services.Places();
        ps.keywordSearch(place, placesSearchCB);
        getCurrentPosBtn();
    }, [place, setName]);
    // #endregion

    return (
        <>
            {/* Navbar */}
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
                    </ul>
                    <button className="toggle-menu" onClick={showSidebar}></button>
                </nav>
            </IconContext.Provider>

            {/* Home */}
            <div
                id="myMap"
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            ></div>
            <div id="result-list">
                {Place.map((item, i) => (
                    <div key={i} style={{ marginTop: '20px' }}>
                        <span>{i + 1}</span>
                        <div>
                            <h5>{item.place_name}</h5>
                            {item.road_address_name ? (
                                <div>
                                    <span>{item.road_address_name}</span>
                                    <span>{item.address_name}</span>
                                </div>
                            ) : (
                                <span>{item.address_name}</span>
                            )}
                            <span>{item.phone}</span>
                        </div>
                    </div>
                ))}
                <div id="pagination"></div>
            </div>

            <Floatingbutton getCurrentPosBtn={getCurrentPosBtn}></Floatingbutton>
        </>
    );
}

export default Temp;