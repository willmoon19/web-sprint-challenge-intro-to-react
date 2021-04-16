// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import CharInfo from "./charInfo.js";

const Display = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    h2{
    border: 2px solid black;
    }

    button{
        
    }

`


export default function Character(props) {
    const {theInfo} = props
    const [sharedInfo, setSharedInfo] = useState(false)
    const showInfo = () => {
    setSharedInfo(!sharedInfo)
}
    return (
        
            <Display>
             <h2>{theInfo.name}</h2>
            <button onClick={showInfo}>info</button>
            <CharInfo theInfo={theInfo} toggleInfo={sharedInfo} />
            </Display>
        
    )
}
