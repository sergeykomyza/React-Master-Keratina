import React from 'react'

export const TeamItem = (props) => {
	return(
		<div className="team__item team__item--fade">
			<div className="team__img">
				<img src={props.foto} alt="slide" />
			</div>
			<div className="team__info">
				<b className="team__name">{props.name}</b>
				<p className="team__description">{props.description}</p>
			</div>
		</div>
	)
}