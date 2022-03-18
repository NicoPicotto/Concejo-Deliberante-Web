import React from 'react';
import Lottie from 'lottie-react';
import lottieHomeSecond from '../../Lottie/lf30_editor_g7nojeb8.json';

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
			<div className='home-img-container'>
				<Lottie {...options} />
			</div>
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
			</div>
		</div>
	);
};

export default LandingSecond;
