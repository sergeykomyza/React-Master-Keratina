import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './advantages.sass'

import {Advantage} from './Advantage'

import img_girl_1 from '../img/advantages/benefits_girl_01.webp'
import img_girl_2 from '../img/advantages/benefits_girl_02.webp'
import icon from '../img/advantages/icon_benefits_01.svg'

function Advantages() {

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

	intersection && intersection.intersectionRatio < 0.5 
		? fadeOut('.advantages--fade') 
		: fadeIn('.advantages--fade')

	const state = {
		advantages: [
			{advantageIcon: icon, advantageText: 'мы профессионалы'},
			{advantageIcon: icon, advantageText: 'вы для нас уникальны'},
			{advantageIcon: icon, advantageText: 'до нас удобно добираться'},
			{advantageIcon: icon, advantageText: 'у нас уютно'},
			{advantageIcon: icon, advantageText: 'вы не захотите от нас уходить'},
			{advantageIcon: icon, advantageText: 'с нас кофе ;)'}
		]
	}
	return(
		<section id="advantages" className="advantages">
			<div className="container">
				<div className="row">
					<div className="col">
						<h3 className="section-title advantages__title">Преимущества</h3>
						<div ref={sectionRef} className="advantages__box">
							<div className="advantages__item">
								<img src={img_girl_1} alt="" className="advantages__foto" />
							</div>
							{
								state.advantages.map((item, i) => {
									return(
										<Advantage icon={item.advantageIcon} text={item.advantageText} key={i} />
									)
								})
							}
							<div className="advantages__item">
								<img src={img_girl_2} alt="" className="advantages__foto" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Advantages