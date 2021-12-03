import React, { useEffect } from 'react';
import KakaoMapScript from './kakaomap';

function App() {
    // useEffect 로 스크립트를 불러옴
    useEffect(() => {
        KakaoMapScript();
    });
    return (
        <div
            id="myMap"
            style={{
                width: '100vw',
                height: '100vh',
            }}
        ></div>
    );
}

export default App;
