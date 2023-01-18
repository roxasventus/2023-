import { React, useState } from 'react';
import "./GradeCSS.css"
//import photo from "../image/image8.png"
export default function Grade(props){
    return( 
        <>
            <div style={{height:"229px", width: "70%", display:"flex", margin:"15vh auto"}}>
                <img style={{width: "50%", height: "100%"}} alt="안됨" src={props.img}></img>
                <div className="GWrapper">
                    <div  className="GradeTitle">
                        <div
                            style={{
                            
                                marginLeft: "7%",
                                marginBottom: "10%",

                                width : '70%',
                                fontFamily: 'Gmarket Sans TTF',
                                fontStyle: "normal",
                                fontWeight: 700,
                                fontSize: "2.5rem",
                                lineHeight: "46px",
                                
                                color: "#000000",
                                
                                /* Inside auto layout */
                            }}
                        >{props.title}</div>
                    </div>
                    <div className='circleWrapper'>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                    </div>
                    <div style={{
                        
                        margin:"28px 7%",

                        width: "60%",
                        height: "187px",
                        left: "991px",
                        top: "1833px",
                        
                        fontFamily: 'Gothic A1',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "25px",
                        /* or 156% */
                        
                        
                        color: "#000000"
                
                    }}>{props.text}
                        <div style={{display: "flex", marginTop: "15px"}}>
                            <div className='Ltriangle'></div>
                            <a className='link' href={props.url}>웹사이트 방문하기</a>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
}
