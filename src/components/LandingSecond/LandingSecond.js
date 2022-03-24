import React from 'react';
import Lottie from 'lottie-react';
import lottieHomeSecond from '../../Lottie/lf30_editor_g7nojeb8.json';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
					Contamos con un bucador para que puedas consutlar el digesto y
					mantenerte informado sobre las ordenanzas sancionadas hasta la fecha.
				</h2>
				<Link to='/legislacion'>
					<Button className='leg-button'>Consultar el digesto</Button>
				</Link>
			</div>
		</div>
	);
};

export default LandingSecond;
