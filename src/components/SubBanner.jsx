import React from 'react';
import '../App.css';
import { useState } from 'react';


export default function SubBanner(props) {
  return (
    <div>
      <div style={{
        
        left: "0%",
        right: "0%",
        top: "0%",
        bottom: "33.78%",
        
        fontFamily: 'Gmarket Sans TTF',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: "48px",
        lineHeight: "55px",
        textAlign: "center",
        
        color: "#000000"
      }}>{props.text}</div>
      <hr style={{
        width: "450px",
        height: "12px",
        background: "#719C17",
        borderRadius: "4px"
      }}/>
    </div>

  );
}