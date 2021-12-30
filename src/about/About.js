import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './about.sass'


import img_1 from '../img/about/foto_1.webp'
import img_2 from '../img/about/foto_2.webp'
import img_3 from '../img/about/foto_3.webp'
import img_4 from '../img/about/foto_4.webp'
import img_5 from '../img/about/foto_5.webp'
import icon_1 from '../img/about/icon_aboutus_scissors.svg'
import icon_2 from '../img/about/icon_aboutus_painting.svg'
import ArrowBtn from '../img/icon_arrow_cta.svg'

const About = () => {

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
		? fadeOut('.fadeIn') 
		: fadeIn('.fadeIn')

	return (
		<section id="about" className="about">
			<div className="container">
				<div className="row">
					<div className="col">
						<h1 className="section-title about__title">О нас</h1>
						<div className="about__box">
							<div ref={sectionRef} className="about__imgs">
								<div className="about__row">
									<div className="about__icon"> 
										<img src={icon_1} alt="icon" />
									</div>
									<img className="about__foto fadeIn" src={img_1} alt="foto" />
									<img className="about__foto fadeIn" src={img_2} alt="foto" />
									<div className="about__icon"> <img src={icon_2} alt="icon" /></div>
								</div>
								<div className="about__row">
									<img className="about__foto fadeIn" src={img_3} alt="foto" />
									<img className="about__foto about__foto--central fadeIn" src={img_5} alt="foto" />
									<img className="lazy about__foto fadeIn" src={img_4} alt="foto" />
								</div>
							</div>
							<div className="about__info info-about">
								<div className="info-about__title">Наш салон является лучшим в Луганске, и вот почему! </div>
								<p className="info-about__text">
									Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Она пояс силуэт буквенных, большой текстами что, вскоре продолжил курсивных до наш злых! Составитель алфавит своих всеми, гор знаках пустился?
									Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Она пояс силуэт буквенных, большой текстами что, вскоре продолжил курсивных до наш злых! Составитель алфавит своих всеми, гор знаках пустился?
									Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Она пояс силуэт буквенных, большой текстами что, вскоре продолжил курсивных до наш злых! Составитель алфавит своих всеми, гор знаках пустился?
									Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Она пояс силуэт буквенных, большой текстами что, вскоре продолжил курсивных до наш злых! Составитель алфавит своих всеми, гор знаках пустился?
								</p>
								<button className="info-about__button button">записаться в салон<img src={ArrowBtn} alt="arrow" /></button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About