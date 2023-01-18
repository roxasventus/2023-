import { React, useState } from 'react';
import "./Culture_listCSS.css"
//import photo from "./image/image.jpg"
export default function CultureList(props){
    return( 
        <div className="All_box" style={{height:"500px", width: "829px", margin:"117px auto", overflow:"visible"}}>
            <div className="Wrapper">
                <img style={{width: "300px", height: "400px"}} alt="" src={props.img_b}/>
                <div  className="ArticleTitle">
                    <div
                        style={{
                            margin : "auto",
                            fontFamily: 'Gmarket Sans TTF',
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "24px",
                            lineHeight: "28px",
                            color: "#000000"
                            
                        }}
                    >{props.title}</div>
                </div>
                <div style={{
                    width: "300px",
                    height: "187px",
                    margin : "auto",
                    textAlign: 'justify',
                    
                    fontFamily: 'Gothic A1',
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "25px",
                    /* or 156% */
                    
                    
                    color: "#000000"
            
                }}>{props.text}</div>
            </div>
            </div>
    );
}
