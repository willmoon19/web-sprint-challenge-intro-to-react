// Write your Character component here
import React, {useState, useEffect} from "react";
import styled from "styled-components";

export default function Character(props) {
    const {character} = props
    return (
        <div>
           {character.map((item) => {
               return (
                   <CharacterInfo 
                   key={item.url}
                   characterObj={item}
                   />
               )
           })}
        </div>
    )
}

const CharacterInfo = (props) => {
    const {characterObj} = props
    return (
        <>
        <h1>{characterObj.name}</h1>
        </>
    )
}