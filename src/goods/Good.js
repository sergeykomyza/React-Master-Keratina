import React, {useState} from 'react'

import ArrowBtn from '../img/icon_arrow_cta.svg'

export const Good = (props) => {

	const [isShow, setIsShow] = useState(true)
	const toggleGood = () => setIsShow(!isShow)

	return(
		
			<div className={ isShow ? "goods__item good goods--fade" : "goods__item good goods--fade active"}>
				<div className="good__content">
					<div className="good__overlay">
						<button className="good__button button" onClick={toggleGood}>
							прайс
							<img src={ArrowBtn} alt="arrow" />
						</button>
					</div>
					<div className="good__preview"><img className="good__img" src={props.foto} alt="good" /><b className="good__name">{props.name}</b><i className="good__price">от {props.price} руб.</i></div>
					<div className="good__hidden">
						<b className="good__name">{props.name}</b>
						<ul className="good__pricelist">
							<li> <span>объем 150мл </span><span className="good__priceitem">500р.</span></li>
							<li> <span>объем 150мл </span><span className="good__priceitem">500р.</span></li>
							<li> <span>объем 150мл </span><span className="good__priceitem">500р.</span></li>
							<li> <span>объем 150мл </span><span className="good__priceitem">500р.</span></li>
						</ul>
						<button className="good__order" data-toggle="modal" data-target="#modal">заказать</button>
					</div>
				</div>
			</div>
		
	)
}