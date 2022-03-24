import React from 'react';
import dots from '../../img/dots-01.png';
import Lottie from 'lottie-react';
import lottieHome from '../../Lottie/lf30_editor_mq6zbumd.json';

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
					¡Bienvenidos al sitio del Concejo de General Cabrera!
				</h1>
				<h2 className='home-text'>
					Aquí podrás informarte sobre las fechas de nuestras sesiones, los
					temas tratados, las ordenanzas aprobadas, eventos y actividades de
					interés y promovidos por el Concejo. Además contamos con una
					herramienta de búsqueda, para que puedas interiorizarte sobre la
					normativa vigente de tus temas de interés.
				</h2>
				<h2 className='home-text'>
					Si deseas realizar consultas o reclamos, lo podés hacer
					presencialmente en nuestras sesiones o a través de nuestro canal de
					consultas desde esta página.
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
