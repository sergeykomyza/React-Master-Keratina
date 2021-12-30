import React from 'react'

export const Review = (props) => {
	return(
		<div className="reviews__item rewiews__item--fade">
			<div className="reviews__content content-reviews">
				<i className="content-reviews__title">{props.title}</i>
				<p className="content-reviews__text">{props.text}</p>
			</div>
			<div className="reviews__author author">
				<div className="author__foto">
					<img src={props.foto} alt="slide" />
				</div>
				<p className="author__name">{props.name}</p>
			</div>
		</div>
	)
}