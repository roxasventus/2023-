import { React, useState } from 'react';
import Toparticle from './Toparticle';
export default function Top(props){


    return(
        <div style={{display: "flex"}}>
            <div
                style={{
                    width: "198px",
                    height: "356px",
                    borderBottom: "356px solid #BAD18A",
                    borderLeft: "0px solid #BAD18A",
                    borderRight: "200px solid #BAD18A"
                }}
            >
                <div style={{

                    paddingTop: "42px",
                    paddingLeft: "20px",

                    width: "152px",
                    height: "28px",
                    left: "454px",
                    top: "1213px",
                    
                    fontFamily: 'Gmarket Sans TTF',
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "25px",
                    lineHeight: "29px",
                    
                    color: "#000000"
                }}>{props.text}</div>
                <div
                    style={{

                        width: "198px",
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
    );
}
