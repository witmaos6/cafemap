import React, { useEffect } from 'react';
import Floatingbutton from '../components/Floatingbutton';
const { kakao } = window;

function Home() {
    let map;

    function locationLoadSuccess(pos) {
        const currentPos = new kakao.maps.LatLng(pos.coords.latitude, pos.coords.longitude);

        map.panTo(currentPos);

        const marker = new kakao.maps.Marker({
            position: currentPos
        });

        marker.setMap(null);
        marker.setMap(map);
    };

    function locationLoadError(pos) {
        alert('위치 정보를 가져오지 못했습니다');
    };

    function getCurrentPosBtn() {
        navigator.geolocation.getCurrentPosition(locationLoadSuccess, locationLoadError);
    };

    // useEffect 로 스크립트를 불러옴
    useEffect(() => {
        const container = document.getElementById('myMap');
        const options = {
            center: new kakao.maps.LatLng(33.499505, 126.531130),
            level: 7,
        };
        map = new kakao.maps.Map(container, options);
        getCurrentPosBtn();
    });

    return (
        <>
            <div
                id="myMap"
                style={{
                    width: '100vw',
                    height: '100vh',
                }}
            ></div>
            <Floatingbutton getCurrentPosBtn={getCurrentPosBtn}></Floatingbutton>
        </>
    );
}

export default Home;