import { React, useState } from 'react';

export default function Toparticle(props){


    return(
        <div
            style={{
            marginLeft: "16px"
        }}>
            <div style={{
                display: "block",

                marginRight: "19px"
            }}>
                <img 
                style={{
                width: "266px",
                height: "239px",
                left: "650px",
                top: "1171px"
                }}
                alt="" src={props.image}/>
                <div                     
                    style={{
                        width: "267x",
                        height: "100px",
                        left: "649px",
                        top: "1427px",

                        marginTop: "17px",

                        paddingTop: "31px",
                        paddingLeft: "18px",
                        
                        background: "#A9ADA1"
                        }}>
                    <div style={{

                        fontFamily: 'Gothic A1',
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "18px",
                        lineHeight: "22px",

                        color: "#000000"

                    }}                       
                    >{props.title}</div>
                    <div style={{
                        width: "200px",
                        height: "39px",
                        left: "667px",
                        top: "1458px",

                        fontFamily: 'Gothic A1',
                        fontSize: "14px",



                    }}>{props.article}</div>
                </div>
            </div>
        </div>
    );
}
