import React from 'react';
import dots from '../../img/dots-01.png';
import Lottie from 'lottie-react';
import lottieHome from '../../Lottie/lf30_editor_jgszsgfw.json';

const options = {
	animationData: lottieHome,
	autoplay: true,
	loop: true,
	style: {
		width: '80%',
	},
};

const InstitucionalLanding = () => {
	return (
		<div className='home-container'>
			<div className='home-text-container'>
				<h1 className='home-title'>
					Se detallan los ciudadanos electos como intendentes y concejales
					durante los mandatos correspondientes.
				</h1>
				<img src={dots} className='home-dots' />
			</div>
			<div className='home-img-container'>
				<Lottie {...options} />
			</div>
		</div>
	);
};

export default InstitucionalLanding;
