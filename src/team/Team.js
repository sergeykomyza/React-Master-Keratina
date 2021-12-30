import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './team.sass'

import {TeamItem} from './TeamItem'

import slideImg from '../img/team/team_pic_01.webp'
import ArrowBtn from '../img/icon_arrow_cta.svg'
import ArrowPrev from '../img/icon_slider_gallery_left.svg'
import ArrowNext from '../img/icon_slider_gallery_right.svg'

import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function Team(){

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
		? fadeOut('.team__item--fade') 
		: fadeIn('.team__item--fade')

	const params = {
		slidesPerView: 4,
		spaceBetween: 50,
		loop: 'true',
		speed: 1000,
		pagination: {
			el: ".team .swiper-pagination",
			clickable: true,
		},
		navigation: {
			nextEl: '.team .swiper-button-next',
			prevEl: '.team .swiper-button-prev',
		},
		breakpoints: {
			1200: {
				slidesPerView: 4,
				spaceBetween: 50,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 50,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 50,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
			}
		}
	}

	const state = {
		teamMembers: [
			{memberFoto: slideImg, memberName: 'asdf', memberDescription: 'asdf'},
			{memberFoto: slideImg, memberName: 'asdf', memberDescription: 'asdf'},
			{memberFoto: slideImg, memberName: 'asdf', memberDescription: 'asdf'},
			{memberFoto: slideImg, memberName: 'asdf', memberDescription: 'asdf'},
			{memberFoto: slideImg, memberName: 'asdf', memberDescription: 'asdf'}
		]
	}

	return(
		<section ref={sectionRef} className="team" id="team">
			<div className="container">
				<div className="row">
					<div className="col">
						<h5 className="section-title team__title">Наша команда</h5> 
						<Swiper {...params}>
							{
								state.teamMembers.map((item, i) => {
									return(
										<SwiperSlide key={i}>
											<TeamItem foto={item.memberFoto} name={item.memberName} description={item.memberDescription} />
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
						<button className="team__button button">
							записаться в салон
							<img src={ArrowBtn} alt="" />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team