import React, {useEffect} from 'react'
import './contacts.sass'

import logo from '../img/header/logo_header.png'
import icon_clock from '../img/footer/icon_footer_clock.svg'
import icon_email from '../img/footer/icon_footer_email.svg'
import icon_location from '../img/footer/icon_footer_location.svg'
import icon_phone from '../img/footer/icon_footer_phone.svg'
import icon_salon from '../img/footer/icon_footer_salon.svg'

import { YMaps, Map, Placemark } from 'react-yandex-maps'

function Contacts() {

	const [showMap, setShowMap] = React.useState(false)
	React.useEffect(() => {
		const timeOut = setTimeout(() => setShowMap(true), 3000);
		return () => clearTimeout(timeOut);
	}, [])

	return (
		<div className="contacts" id="contacts">
			<div className="container">
				<div className="row">
					<div className="col"> <img className="contacts__logo" src={logo} alt="logo" /></div>
				</div>
				<div className="row">
					<div className="col-lg-3">
						<div className="contacts__col">
							<div className="contacts__item contact">
								<div className="contact__name"><img className="contact__icon" src={icon_salon} alt="icon" />Салон</div>
								<div className="contact__val">г. Луганск, кв. Лиховида 1, ост.Городок</div>
							</div>
							<div className="contacts__item contact">
								<div className="contact__name"><img className="contact__icon" src={icon_clock} alt="icon" />График работы:</div>
								<div className="contact__val">
									Пн-Пт - с 9:00 до 20:00 <br />Сб-Вс - с 10:00 до 18:00</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="contacts__col">
							<div className="contacts__item contact">
								<div className="contact__name"><img className="contact__icon" src={icon_phone} alt="icon" />Телефон</div><a className="contact__val" href="tel:+380721476588">+38 (072) 147-65-88</a>
							</div>
							<div className="contacts__item contact">
								<div className="contact__name"><img className="contact__icon" src={icon_email} alt="icon" />E-mail</div><a className="contact__val" href="mailto:email@mail.ru">email@mail.ru</a>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="contact">
							<div className="contact__name"><img className="contact__icon" src={icon_location} alt="icon" />Как нас найти</div>
							<div className="contact__map" id="map">
								{ showMap &&
									<YMaps>
										<Map defaultState={{ center: [55.851449, 37.492635], zoom: 13 }} width="100%" height="100%" >
											<Placemark geometry={[55.851449, 37.492635]} />
										</Map>
									</YMaps>
								}
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contacts