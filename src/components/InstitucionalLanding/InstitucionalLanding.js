import React from 'react';
import dots from '../../img/dots-01.png';
import Lottie from 'lottie-react';
import lottieHome from '../../Lottie/lf30_editor_krt6lqd2.json';
import { Button } from 'react-bootstrap';

const options = {
	animationData: lottieHome,
	autoplay: true,
	loop: false,
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
				<img src={dots} className='home-dots' alt='Puntos decorativos' />
				<Button
					href='./Carta_Organica_Municipal_MGC.pdf'
					className='leg-button-2'
					download
				>
					Descargar Carta Orgánica
				</Button>
			</div>
			<div className='home-img-container'>
				<Lottie {...options} />
			</div>
		</div>
	);
};

export default InstitucionalLanding;
