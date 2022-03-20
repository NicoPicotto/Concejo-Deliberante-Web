import React from 'react'
import Lottie from 'lottie-react';
import dots from '../../img/dots-01.png';
import LottieSearch from "../../Lottie/98877-search.json"

const options = {
	animationData: LottieSearch,
	autoplay: true,
	loop: true,
	style: {
		width: '80%',
	},
};

const SearchLegislacion = () => {
    return (
		<div className='leg-landing-container'>
			<div className='leg-text-container'>
				<h1 className='leg-title'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</h1>
				<input placeholder='Escribí acá para buscar' className='leg-input'></input>
				<img src={dots} className='home-dots' />
                <h3 className='leg-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
					quis exercitationem</h3>
			</div>
			<div className='leg-img-container'>
				<Lottie {...options} />
			</div>
		</div>
	);
}

export default SearchLegislacion