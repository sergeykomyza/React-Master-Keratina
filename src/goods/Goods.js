import React, {useRef, useState} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './goods.sass'

import {Good} from './Good'

import ArrowBtn from '../img/icon_arrow_cta.svg'
import good_1 from '../img/goods/01.png'


function Goods() {

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

	intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.goods--fade') : fadeIn('.goods--fade')

	const state = {
		goods: [
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'},
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'},
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'}
		],
		goodsMore: [
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'},
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'},
			{goodFoto: good_1, goodName: 'fix hair', goodPrice: '1250'}
		]
	}

	const [isShow, setIsShow] = useState(true)
	const toggleMoreGoods = () => setIsShow(!isShow)

	return (
		<section className="goods" id="goods">
			<div className="container">
				<div className="row">
					<div className="col">
						<h6 className="section-title goods__title">Наши товары</h6>
						<div className="goods__box" ref={sectionRef}>
							{
								state.goods.map((item, i) => {
									return(
										<Good foto={item.goodFoto} name={item.goodName} price={item.goodPrice} key={i}/>
									)
								})
							}
						</div>
						<div className={ isShow ? "goods__box goods__more" : "goods__box goods__more--open"}>
							{
								state.goodsMore.map((item, i) => {
									return(
										<Good foto={item.goodFoto} name={item.goodName} price={item.goodPrice} key={i}/>
									)
								})
							}
						</div>
						<button className="goods__button button closed" onClick={toggleMoreGoods}>
							{isShow ? "показать больше товаров" : "скрыть все товары"}
							<img src={ArrowBtn} alt="arrow" />
						</button>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Goods