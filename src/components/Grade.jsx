import { React, useState } from 'react';
import "./GradeCSS.css"
//import photo from "../image/image8.png"
export default function Grade(props){
    return( 
        <>

            <div style={{height:"auto", width: "55%", display:"flex", margin:"118px auto"}}>
                <img style={{width: "55%", height: "35%"}} alt="안됨" src={props.img}></img>
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
<<<<<<< HEAD
                                fontSize: "2.5rem",
=======
                                fontSize: "3rem",
>>>>>>> 7b72b9ce3e86bdc4264f22224f7029e78f01c8c1
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

<<<<<<< HEAD
                        width: "60%",
                        height: "187px",
=======
                        width: "90%",
                        height: "auto",
>>>>>>> 7b72b9ce3e86bdc4264f22224f7029e78f01c8c1
                        left: "991px",
                        top: "1833px",
                        
                        fontFamily: 'Gothic A1',
                        fontStyle: "normal",
                        fontWeight: 500,
                        fontSize: "1rem",
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
