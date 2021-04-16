// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";
import CharInfo from "./charInfo.js";


export default function Character(props) {
    const {theInfo} = props
    const [sharedInfo, setSharedInfo] = useState(false)
    const showInfo = () => {
    setSharedInfo(!sharedInfo)
}
    return (
        <div>
            <div>
             <h2>{theInfo.name}</h2>
            <button onClick={showInfo}>info</button>
            <CharInfo theInfo={theInfo} toggleInfo={sharedInfo} />
            </div>
        </div>
    )
}
