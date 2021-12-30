import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './reviews.sass'

import {Review} from './Review'

import slideImg from '../img/reviews/review_1.jpg'
import ArrowPrev from '../img/icon_slider_gallery_left.svg'
import ArrowNext from '../img/icon_slider_gallery_right.svg'

import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
// install Swiper modules
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

function Reviews(){

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	})

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			transform: 'rotateY(0deg)',
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}

	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			transform: 'rotateY(190deg)',
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}

	intersection && intersection.intersectionRatio < 0.5 
		? fadeOut('.rewiews__item--fade') 
		: fadeIn('.rewiews__item--fade')

	const params = {
		effect: "coverflow",
		slidesPerView: 3,
		spaceBetween: 0,
		loop: 'true',
		speed: 1000,
		pagination: {
			el: ".reviews .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.reviews .swiper-button-next',
			prevEl: '.reviews .swiper-button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			992: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 10,
			}
		}
	}

	const state = {
		reviews: [
			{reviewsTitle: 'asdf', reviewsText: 'asdfasdf', reviewsFoto: slideImg, reviewsName: 'asdf'},
			{reviewsTitle: 'asdf', reviewsText: 'asdfasdf', reviewsFoto: slideImg, reviewsName: 'asdf'},
			{reviewsTitle: 'asdf', reviewsText: 'asdfasdf', reviewsFoto: slideImg, reviewsName: 'asdf'},
			{reviewsTitle: 'asdf', reviewsText: 'asdfasdf', reviewsFoto: slideImg, reviewsName: 'asdf'}
		]
	}

	return(
		<section ref={sectionRef} id="reviews" className="reviews">
			<div className="container">
				<div className="row">
					<div className="col">
						<h6 className="section-title reivews__title">Наши клиенты</h6>
						<Swiper {...params}>
							{
								state.reviews.map((item, i) => {
									return(
										<SwiperSlide key={i}>
											<Review title={item.reviewsTitle} text={item.reviewsText} foto={item.reviewsFoto} name={item.reviewsName}/>
										</SwiperSlide>
									)
								})
							}
						</Swiper>
						<div className="swiper__navigation">
							<button className="swiper-button-prev"><img src={ArrowPrev} alt="" /></button>
							<div className="swiper-pagination"></div>
							<button className="swiper-button-next"><img src={ArrowNext} alt="" /></button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Reviews