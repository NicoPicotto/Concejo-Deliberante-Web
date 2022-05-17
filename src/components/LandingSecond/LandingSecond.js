import React from 'react';
import Lottie from 'lottie-react';
import lottieHomeSecond from '../../Lottie/lf30_editor_g7nojeb8.json';
import { Button } from 'react-bootstrap';

const options = {
	animationData: lottieHomeSecond,
	autoplay: true,
	loop: true,
	style: {
		width: '80%',
	},
};

const LandingSecond = () => {
	return (
		<div className='home-container'>
			<div className='second-img-container'>
				<Lottie {...options} />
			</div>
			<div className='home-text-container'>
				<h1 className='home-title'>Información clara y transparente</h1>
				<h2 className='home-text'>
					Accedé a todos los Boletines Oficiales emitidos por la Municipalidad de General Cabrera.
				</h2>
				<a href="https://www.generalcabrera.gob.ar/legislacion/" target='_blank'>
					<Button className='leg-button'>Ver boletines</Button>
				</a>
			</div>
		</div>
	);
};

export default LandingSecond;
