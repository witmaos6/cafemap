import React from 'react';

function Floatingbutton(props) {
    return (
        <div style={{
            position:"fixed",
            right:"10px",
            bottom: "10px",
            width: '100px',
            height: '100px',
            zIndex:"10",
        }}>
            <button onClick={props.getCurrentPosBtn}>경로 받아오기</button>
        </div>
    )
}
export default Floatingbutton;