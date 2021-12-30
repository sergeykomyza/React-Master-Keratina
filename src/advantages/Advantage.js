import React from 'react'

export const Advantage = (props) => {
	return(
		<div className="advantages__item advantages--fade">
			<img src={props.icon} alt="" className="advantages__icon" />
			<p className="advantages__name">{props.text}</p>
		</div>
	)
}