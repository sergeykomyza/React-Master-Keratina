import React from 'react'

import './header.sass'
import Logo from '../img/header/logo_header.png'
import iconViber from '../img/header/icon_viber.svg'
import iconWhatsapp from '../img/header/icon_watsap.svg'

function activeMenu(e){
	e.preventDefault();
	const gamburger = document.querySelector('.gamburger')
	const firstLine = gamburger.querySelectorAll('span')[0]
	const middleLine = gamburger.querySelectorAll('span')[1]
	const lastLine = gamburger.querySelectorAll('span')[2]
	const mMenu = document.querySelector('.header__menu')
	const menuItem = document.querySelectorAll('.menu__item')
	middleLine.classList.toggle('open')
	firstLine.classList.toggle('open')
	lastLine.classList.toggle('open')
	mMenu.classList.toggle('active')
	let times = 0
	menuItem.forEach(item => {
		setTimeout(() => {
			item.classList.toggle('active')
		}, times);
		times += 100
	})
}



function Header() {
	return (
		<header className="header">
			<div className="container">
				<nav className="header__nav">
					<img className="header__logo" src={Logo} alt="logo" />
					<ul className="header__menu menu">
						<li className="menu__item"><a href="#about" className="menu__link">о нас</a></li>
						<li className="menu__item"><a href="#services" className="menu__link">услуги</a></li>
						<li className="menu__item"><a href="#advantages" className="menu__link">преимущества</a></li>
						<li className="menu__item"><a href="#gallery" className="menu__link">галерея</a></li>
						<li className="menu__item"><a href="#team" className="menu__link">наша команда</a></li>
						<li className="menu__item"><a href="#reviews" className="menu__link">отзывы</a></li>
						<li className="menu__item"><a href="#goods" className="menu__link">наши товары</a></li>
						<li className="menu__item"><a href="#contacts" className="menu__link">контакты</a></li>
					</ul>
					<div className="header__connection connection">
						<img className="connection__icon" src={iconViber} alt="viber" />
						<a className="connection__num" href="/">+38 072 589 74 23</a>
						<img className="connection__icon" src={iconWhatsapp} alt="whatsapp" />
					</div>
					<div className="visible-992">
						<div className="gamburger" onClick={activeMenu}> <span></span><span></span><span></span></div>
					</div>
				</nav>
			</div>

		</header>
	)
}

export default Header

