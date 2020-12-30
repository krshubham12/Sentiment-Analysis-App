//https://learn-the-web.algonquindesign.ca/courses/web-dev-3/svg-smiley-face/
import React, { useState, useEffect } from 'react'
import "./Emoji.css"

export const Emoji = ({sentiment}) => {

    const [mouthval, setMouthval] = useState("M40,90 Q70,90 100,90");
    const [color, setColor] = useState('#E3D96B')

    useEffect(() => {
        
        if(sentiment === 'Positive') {
            setMouthval("M40,90 Q70,120 100,90")
            setColor('#FFC75F')
        } else if (sentiment === 'Negative') {
            setMouthval("M40,100 Q70,80 100,100")
            setColor('#EB5858')
        } else {
            setMouthval("M40,90 Q70,90 100,90")
            setColor('#E3D96B')
        }
    }, [sentiment])

    return (
        <div className="emoji" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Sentiment">
            <div className="smiley">
                <svg>
                    <circle className="face" cx="70" cy="70" r="70" style={{fill:color}}></circle>
                    <circle className="left-eye" cx ="50" cy="50" r="10" ></circle>
                    <circle className="left-eye" cx ="90" cy="50" r="10" ></circle>
                    <path className="mouth" d={mouthval}></path>
                </svg>
            </div>
        </div>
    )
}
