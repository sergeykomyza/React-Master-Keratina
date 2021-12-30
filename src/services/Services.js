import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './services.sass'

import {Service} from './Service'

import img_1 from '../img/services/foto_1.webp'
import img_2 from '../img/services/foto_2.webp'
import img_3 from '../img/services/foto_3.webp'
import img_4 from '../img/services/foto_4.webp'
import img_5 from '../img/services/foto_5.webp'
import img_6 from '../img/services/foto_6.webp'

function Services() {

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef,{
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	})

	const fadeIn = element => {
		gsap.to(element, 1, {
			opacity: 1,
			y: 0,
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}
	const fadeOut = element => {
		gsap.to(element, 1, {
			opacity: 0,
			y: -60,
			ease: 'power4.out',
			stagger: {
				amount: 1
			}
		})
	}

	intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.service--fade') : fadeIn('.service--fade')

	const state = {
		services: [
			{serviceImg: img_1, serviceName: 'Окрашивание', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: img_2, serviceName: 'Маникюр', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: img_3, serviceName: 'Педикюр', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: img_4, serviceName: 'Мелирование', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: img_5, serviceName: 'Кератинирование', servicePrice: '1000', serviceText: 'asdfasdfasdf'},
			{serviceImg: img_6, serviceName: 'Стрижка', servicePrice: '1000', serviceText: 'asdfasdfasdf'}
		]
	}
	return (
		<section id="services" className="services">
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="section-title services__title">Услуги</h2>
						<div className="services__box" ref={sectionRef}>
							{
								state.services.map((item, i) => {
									return(
										<Service img={item.serviceImg} name={item.serviceName} price={item.servicePrice} text={item.serviceText} key={i} />
									)
								})
							}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Services