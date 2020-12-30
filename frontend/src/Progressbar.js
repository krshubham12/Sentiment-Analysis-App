//https://www.youtube.com/watch?v=AbRgaY0khPM&ab_channel=FlorinPop
import React from 'react'
import './Progressbar.css'

const Progressbar = ({done}) => {

	return (
		<div 
			className="progress" 
			data-bs-toggle="tooltip" 
			data-bs-placement="bottom" 
			title="Confidence"
		>
			<div className="progress-done" style={{opacity: 1, width: `${parseInt(done)}%`}}>
				{parseInt(done)}%
			</div>
		</div>
	)
}

export default Progressbar