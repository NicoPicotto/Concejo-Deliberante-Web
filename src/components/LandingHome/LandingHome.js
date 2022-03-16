import React from 'react';
import dots from '../../img/dots-01.png';
import logoMuni from '../../img/logomuni-01.png';
import Lottie from 'lottie-react';
import lottieHome from '../../Lottie/lf30_editor_diktondu.json';
import './LandingHome.css';

const options = {
	animationData: lottieHome,
	autoplay: true,
	loop: false,
	style: {
		width: '80%',
	},
};

const LandingHome = () => {
	return (
		<div className='home-container'>
			<div className='home-text-container'>
				<h1 className='home-title'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</h1>
				<h2 className='home-text'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
					quis exercitationem culpa nesciunt nihil aut nostrum explicabo
					reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
					Voluptatum ducimus voluptates voluptas?
				</h2>
				<img src={dots} className='home-dots' />
			</div>
			<div className='home-img-container'>
				<Lottie {...options} />
			</div>
		</div>
	);
};

export default LandingHome;
