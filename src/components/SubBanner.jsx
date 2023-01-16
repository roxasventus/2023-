import React from 'react';
import '../App.css';
import { useState } from 'react';


export default function SubBanner(props) {
  return (
    <div>
      <div style={{
        
        fontFamily: 'Gmarket Sans TTF',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "3rem",
        lineHeight: "55px",
        textAlign: "center",
        
        color: "#000000"
      }}>{props.text}</div>
      <hr style={{
        width: "10%",
        height: "10px",
        background: "#719C17",
        borderRadius: "4px"
      }}/>
    </div>

  );
}