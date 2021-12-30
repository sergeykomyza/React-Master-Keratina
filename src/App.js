import React from 'react'
import $ from 'jquery'

import './App.sass';
import Header from './header/Header'
import Home from './home/Home'
import About from './about/About'
import Services from './services/Services'
import Advantages from './advantages/Advantages'
import Statistic from './statistic/Statistic'
import Gallery from './gallery/Gallery'
import Team from './team/Team'
import Reviews from './reviews/Reviews'
import Feedback from './feedback/Feedback'
import Goods from './goods/Goods'
import Contacts from './contacts/Contacts'

import bgBody from './img/bg_modul_grey.webp'

const bodyStyle = {
	backgroundImage: "url(" + bgBody + ")"
}



function App() {

	React.useEffect(() => {
		const menu = document.querySelector('.header__menu');
		const menuItem = document.querySelectorAll('.menu__item');
		const gamburger = document.querySelector('.gamburger');
		const firstLine = gamburger.querySelectorAll('span')[0];
		const middleLine = gamburger.querySelectorAll('span')[1];
		const lastLine = gamburger.querySelectorAll('span')[2];
		$('.menu__link').click(function () {
			var scroll_elem = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(scroll_elem).offset().top
			}, 1000);
			$('.menu__link').removeClass('menu__link--active')
			$(this).addClass('menu__link--active')
			middleLine.classList.toggle('open');
			firstLine.classList.toggle('open');
			lastLine.classList.toggle('open');
			menu.classList.toggle('active');
			menuItem.forEach(item => {
				item.classList.toggle('active')
			});
		});
	}, [])

	return (
		<div className="App" style={bodyStyle}>
			<Header />
			<Home />
			<About />
			<Services />
			<Advantages />
			<Statistic />
			<Gallery />
			<Team />
			<Reviews />
			<Feedback />
			<Goods />
			<Contacts />
		</div>
	);
}

export default App
