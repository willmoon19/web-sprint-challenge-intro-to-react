import React, {useState, useEffect} from "react";
import styled from "styled-components";

const CharInfo = props => {
    const { toggleInfo, theInfo } = props
    
    return ( 
        <div>
        { toggleInfo ?
        <>
            <h4>Birth Year: {theInfo.birth_year}</h4>
            <h4>Eye Color: {theInfo.eye_color}</h4>
            <h4>Gender: {theInfo.gender}</h4>
            <h4>Hair Color: {theInfo.hair_color}</h4>
            <h4>Height: {theInfo.height}</h4>
            <h4>Mass: {theInfo.mass}</h4>
            <h4>Skin Color: {theInfo.skin_color}</h4>
        </>
    : <div></div>}
    </div>
    ) 
}

export default CharInfo;