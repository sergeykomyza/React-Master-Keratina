import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './gallery.sass'

import bg from '../img/bg_modul_black.webp'
import slide_1 from '../img/gallery/03.webp'
import slide_2 from '../img/gallery/04.webp'
import slide_3 from '../img/gallery/05.webp'
import woman from '../img/gallery/pic_gallery_woman.webp'
import arrowTop from '../img/gallery/icon_slider_gallery_top.svg'
import arrowBottom from '../img/gallery/icon_slider_gallery_botom.svg'

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const sectionBg = {
	backgroundImage: "url(" + bg + ")"
}

function Gallery() {

	const sectionRef = useRef(null)

	const intersection = useIntersection (sectionRef,{
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	})

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			x: 0,
			ease: 'power4.out'
		})
	}
	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			x: -300,
			ease: 'power4.out'
		})
	}

	intersection && intersection.intersectionRatio < 0.5 
		? fadeOut('.gallery--fade') 
		: fadeIn('.gallery--fade')

	const params = {
		slidesPerView: 1,
		spaceBetween: 10,
		direction: "vertical",
		loop: 'true',
		centeredSlides: 'true',
		speed: 1000,
		navigation: {
			nextEl: '.gallery .swiper-button-next',
			prevEl: '.gallery .swiper-button-prev'
		},
		pagination: {
			el: ".gallery .swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
				spaceBetween: -80,
			}
		}
	}

	return(
		<section id="gallery" className="gallery"  style={sectionBg} ref={sectionRef}>
			<div className="container">
				<div className="row">
					<div className="col">
						<h4 className="section-title gallery__title">Галерея</h4>
						<Swiper {...params}>
							<SwiperSlide>
								<img src={slide_1} alt="slide" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide_2} alt="slide" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide_3} alt="slide" />
							</SwiperSlide>
							<SwiperSlide>
								<img src={slide_1} alt="slide" />
							</SwiperSlide>
						</Swiper>
						<button className="swiper-button-next"><img src={arrowTop} alt="" /></button>
						<div className="swiper-pagination"></div>
						<button className="swiper-button-prev"><img src={arrowBottom} alt="" /></button>
						<div className="gallery__img gallery--fade">
							<img src={woman} alt="woman" />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Gallery