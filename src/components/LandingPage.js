import React, { useState } from 'react';
import Home from '../pages/Home';

function LandingPage(){
    const [InputText, setInputText]=useState('')
    const [Place, setPlace]=useState('')

    const onChange=(e)=>{
        setInputText(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPlace(InputText)
        setInputText('')
    }

    return(
        <>
            <form className="inputForm" onSubmit={handleSubmit}>
                <input placeholder="검색어를 입려하세요" onChange={onChange} value={InputText}/>
                <button type="submit">검색</button>
            </form>
            <Home searchPlace={Place}/>
        </>
    )
}
export default LandingPage