import React from 'react'
import './statistic.sass'

import sectionBg from '../img/statistic/foto_1.webp'
import icon_1 from '../img/statistic/icon_statistics_01.svg'
import icon_2 from '../img/statistic/icon_statistics_02.svg'
import icon_3 from '../img/statistic/icon_statistics_03.svg'
import icon_4 from '../img/statistic/icon_statistics_04.svg'

const background = {
	background: "url("+ sectionBg +") center center/ cover no-repeat"
}

function Statistic(){
	return(
		<section className="statistic" style={background}>
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="statistic__box">
							<div className="statistic__item">
								<img src={icon_1} alt="" className="statistic__icon" />
								<div className="statistic__val client">984</div>
								<span className="statistic__name">клиентов</span>
							</div> 
							<div className="statistic__item">
								<img src={icon_2} alt="" className="statistic__icon" />
								<div className="statistic__val client">763</div>
								<span className="statistic__name">спасибо</span>
							</div>
							<div className="statistic__item">
								<img src={icon_3} alt="" className="statistic__icon" />
								<div className="statistic__val client">27</div>
								<span className="statistic__name">дипломов</span>
							</div>
							<div className="statistic__item">
								<img src={icon_4} alt="" className="statistic__icon" />
								<div className="statistic__val client">1537</div>
								<span className="statistic__name">чашек кофе</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Statistic