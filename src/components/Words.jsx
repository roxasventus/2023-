import React from 'react';
import './WordsCSS.css';
import { useState } from 'react';

export default function Words(props) {
  return(
    <>
    <div style={{width: "1500px", height: "100px", margin:"auto", paddingLeft: "250px"}}>
        <div style={{display: "flex", justifyContent: "center"}}>
            <div className="word">{props.word1}</div>
            <div className="word">{props.word2}</div>
            <div className="word">{props.word3}</div>
        </div>
    </div>
    <hr style={{
    width: "1002px",
    height: "0px",
    left: "483px",
    top: "767px",

    paddingLeft: "250px",

    border: "1px solid #8E8E8E"
    }}/>
    </>
);
}