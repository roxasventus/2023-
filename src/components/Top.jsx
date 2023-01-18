import { React, useState } from 'react';
import Toparticle from './Toparticle';
export default function Top(props){


    return(
        <>
            <div style={{display: "flex", width: "80%", margin: " 100px auto"}}>
                <div
                    style={{
                        width: "5%",
                        height: "356px",
                        borderBottom: "13vw solid #BAD18A",
                        borderLeft: "0px solid #BAD18A",
                        borderRight: "13vw solid #BAD18A"
                    }}
                >
                    <div style={{

                        paddingTop: "42px",
                        paddingLeft: "20px",

                        width: "100%",
                        height: "28px",
                        left: "454px",
                        top: "1213px",
                        
                        fontFamily: 'Gmarket Sans TTF',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "1.563rem",
                        lineHeight: "29px",
                        
                        color: "#000000"
                    }}>{props.text}</div>
                    <div
                        style={{

                            width: "100%",
                            height: "201px",

                            paddingTop: "116px",

                        
                            borderBottom: "198px solid #91C427",
                            borderLeft: "0px solid transparent",
                            borderRight: "201px solid transparent"
                        }}
                    >
                    </div>
                </div>
                <Toparticle image={props.image1} title={props.title1} article={props.article1}/>
                <Toparticle image={props.image2} title={props.title2} article={props.article2}/>
                <Toparticle image={props.image3} title={props.title3} article={props.article3}/>
            </div>
            <hr style={{
                width: "80%",
                height: "0px",
                left: "483px",
                top: "767px",

                paddingLeft: "250px",
                marginBottom: "100px",

                border: "solid #8E8E8E"
                }}/>
        </>
    );
}
