import React, {useRef} from 'react'
import { useIntersection } from 'react-use'
import gsap from 'gsap'
import './feedback.sass'

function Feedback() {

	const sectionRef = useRef(null)

	const intersection = useIntersection(sectionRef,{
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
			x: -500,
			ease: 'power4.out'
		})
	}

	intersection && intersection.intersectionRatio < 0.5
		? fadeOut('.feedback--fade')
		: fadeIn('.feedback--fade')

	return (
		<section ref={sectionRef} className="feedback">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2">
						<form className="feedback__form form feedback--fade" action="#">
							<h6 className="feedback__title section-title">Напишите нам</h6>
							<p className="feedback__text">* - обязательные поля</p>
							<div className="form__fields">
								<div className="form__item">
									<label className="form__label">Контактное лицо <span>*</span></label>
									<input className="form__input" type="text" />
								</div>
								<div className="form__item">
									<label className="form__label">Телефон <span>*</span></label>
									<input className="form__input phone" type="text" />
								</div>
								<div className="form__item">
									<label className="form__label">E-mail </label>
									<input className="form__input" type="text" />
								</div>
								<div className="form__item form__item--message">
									<label className="form__label">Сообщение</label>
									<textarea className="form__input"></textarea>
								</div>
							</div>
							<div className="form__agree agree">
								<input className="agree__check" id="checkbox" type="checkbox"  />
								<label className="agree__label agree__label--checkbox" htmlFor="checkbox"> <span>Согласен на обработку <a href="/">персональных данных</a></span></label>
							</div>
							<button className="form__button">отправить</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Feedback