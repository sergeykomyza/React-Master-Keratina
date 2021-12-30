import React from 'react'
import './home.sass'
import Slide_1 from '../img/home/slider_big_img_01.webp'
import Slide_2 from '../img/home/slider_big_img_02.webp'
import Slide_3 from '../img/home/slider_big_img_03.webp'
import Slide_1_small from '../img/home/slider_small_img_01.webp'
import Slide_2_small from '../img/home/slider_small_img_02.webp'
import Slide_3_small from '../img/home/slider_small_img_03.webp'
import ArrowBtn from '../img/icon_arrow_cta.svg'
import ArrowNext from '../img/home/icon_slider_right.svg'
import ArrowPrev from '../img/home/icon_slider_left.svg'

import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-fade/effect-fade.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectFade]);

function Home() {

	const params = {
		effect: "fade",
		navigation: {
			nextEl: '.home .swiper-button-next',
			prevEl: '.home .swiper-button-prev'
		},
		pagination: {
			el: ".home .swiper-pagination",
			clickable: true,
		},
	}

	return (
		<div className="home">
			<Swiper {...params}>
				<SwiperSlide>
					<img className="swiper-slide__img hidden-992" src={Slide_1} alt="slide" />
					<img className="swiper-slide__img visible-992" src={Slide_1_small} alt="slide" />
					<div className="container full-width">
						<div className="row">
							<div className="col">
								<div className="swiper-slide__info slide-info">
									<div className="slide-info__title"> <span>Кератиновое </span><span>восстановление </span><span>волос</span></div>
									<p className="slide-info__text">Обработка прядей специальным кератиновым составом, который преображает волосы, насыщая их питательными веществами, «ремонтирует» поврежденные участки, увлажняет, запаивает секущиеся кончики и в целом улучшает состояние шевелюры</p>
									<button className="button slide-info__button">узнать подробнее<img src={ArrowBtn} alt="arrow" /></button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
				<img className="swiper-slide__img hidden-992" src={Slide_2} alt="slide" />
					<img className="swiper-slide__img visible-992" src={Slide_2_small} alt="slide" />
					<div className="container full-width">
						<div className="row">
							<div className="col">
								<div className="swiper-slide__info slide-info">
									<div className="slide-info__title"> <span>Кератиновое </span><span>восстановление </span><span>волос</span></div>
									<p className="slide-info__text">Обработка прядей специальным кератиновым составом, который преображает волосы, насыщая их питательными веществами, «ремонтирует» поврежденные участки, увлажняет, запаивает секущиеся кончики и в целом улучшает состояние шевелюры</p>
									<button className="button slide-info__button">узнать подробнее<img src={ArrowBtn} alt="arrow" /></button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<img className="swiper-slide__img hidden-992" src={Slide_3} alt="slide" />
					<img className="swiper-slide__img visible-992" src={Slide_3_small} alt="slide" />
					<div className="container full-width">
						<div className="row">
							<div className="col">
								<div className="swiper-slide__info slide-info">
									<div className="slide-info__title"> <span>Кератиновое </span><span>восстановление </span><span>волос</span></div>
									<p className="slide-info__text">Обработка прядей специальным кератиновым составом, который преображает волосы, насыщая их питательными веществами, «ремонтирует» поврежденные участки, увлажняет, запаивает секущиеся кончики и в целом улучшает состояние шевелюры</p>
									<button className="button slide-info__button">узнать подробнее<img src={ArrowBtn} alt="arrow" /></button>
								</div>
							</div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className="swiper-pagination"></div>
			<div className="swiper-navigation">
				<button className="swiper-button-prev"><img src={ArrowPrev} alt="arrow" /></button>
				<button className="swiper-button-next"><img src={ArrowNext} alt="arrow" /></button>
			</div>
		</div>
	)
}

export default Home