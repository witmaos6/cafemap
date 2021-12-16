import React from 'react';

function Floatingbutton(props) {
    return (
        <div style={{
            position: "fixed",
            right: "10px",
            bottom: "10px",
            width: '150px',
            height: '100px',
            zIndex: "10",
            color: "white",
            
        }}>
            <button onClick={props.getCurrentPosBtn}>현 위치 보기</button>
        </div>
    )
}
export default Floatingbutton;