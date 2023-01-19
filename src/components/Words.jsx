import React from 'react';
import './WordsCSS.css';
import { useState } from 'react';

export default function Words(props) {
  return(
    <>
    <div style={{width: "80%", height: "100%", margin:"auto", paddingLeft: "170px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="word">{props.word1}</div>
            <div className="word">{props.word2}</div>
            <div className="word">{props.word3}</div>
        </div>
    </div>
    <hr style={{
    width: "90%px",
    height: "0px",

    paddingLeft: "200px",

    border: "1px solid #8E8E8E"
    }}/>
    </>
);
}