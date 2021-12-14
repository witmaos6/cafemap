import React, { useEffect, useState } from 'react';
import Floatingbutton from '../components/Floatingbutton';
const { kakao } = window;

function Home({ setName, searchPlace }) {
    const [Place, setPlaces] = useState([]);
    let map;
    let infowindow;

    function locationLoadSuccess(pos) {
        const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        map.panTo(currentPos);

        const marker = new kakao.maps.Marker({
            position: currentPos,
        });

        marker.setMap(null);
        marker.setMap(map);
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
        let marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x),
        });

        kakao.maps.event.addListener(marker, 'click', function () {
            let a = document.createElement('div');
            a.setAttribute('style', 'padding:5px;font-size:12px;');

            let content = document.createTextNode(place.place_name);
            a.appendChild(content);

            let btn = document.createElement('button');
            btn.innerText = '확인';
            btn.onclick = () => setName(place.place_name);
            a.appendChild(btn);

            // '<div style="padding:5px;font-size:12px;">${place.place_name} <button onclick="onClick()">확인</button> </div>';
            infowindow.setContent(a);

            //  const temp = document.querySelector('#btn');
            //  temp.addEventListener('click', () => {
            //    console.log('ds')
            //  })

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
        ps.keywordSearch(searchPlace, placesSearchCB);
        getCurrentPosBtn();
    }, [searchPlace, setName]);

    return (
        <>
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

export default Home;