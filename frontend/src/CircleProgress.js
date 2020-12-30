//https://www.youtube.com/watch?v=hRYA1CXfwP4&ab_channel=webDev
import React from 'react'
import './CircleProgress.css'

export const CircleProgress = ({done}) => {

    const style = {
        stroke: "#63E2FF",
        strokeDashoffset: 440 - (440 * parseInt(done)) / 100
    }

    return (
        <div className="progress-container">
            <div className="xcard">
            <div className="box">
                <div className="percent">
                    <svg>
                        <circle cx="70" cy="70" r="70" style={style}></circle>
                        <circle cx="70" cy="70" r="70" style={style}></circle>
                    </svg>
                    <div className="number">
                        <h2>{parseInt(done)}<span>%</span></h2>
                    </div>
                </div>
                <div className="smiley">
                    <svg>
                        <circle className="face" cx="70" cy="70" r="70" ></circle>
                        <circle className="left-eye" cx ="50" cy="50" r="10" ></circle>
                        <circle className="left-eye" cx ="90" cy="50" r="10" ></circle>
                        <path className="mouth" d="M40,90 Q70,120 100,90"></path>
                    </svg>
                </div>
                <div className="smiley">
                    <svg>
                        <circle className="face" cx="70" cy="70" r="70" ></circle>
                        <circle className="left-eye" cx ="50" cy="50" r="10" ></circle>
                        <circle className="left-eye" cx ="90" cy="50" r="10" ></circle>
                        <path className="mouth" d="M40,100 Q70,80 100,100"></path>
                    </svg>
                </div>
                <div className="smiley">
                    <svg>
                        <circle className="face" cx="70" cy="70" r="70" ></circle>
                        <circle className="left-eye" cx ="50" cy="50" r="10" ></circle>
                        <circle className="left-eye" cx ="90" cy="50" r="10" ></circle>
                        <path className="mouth" d="M40,90 Q70,90 100,90"></path>
                    </svg>
                </div>
            </div>
            </div>

        </div>
    )
}
