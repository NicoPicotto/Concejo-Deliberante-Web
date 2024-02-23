import React, { useState } from 'react';
import Lottie from 'lottie-react';
import dots from '../../img/dots-01.png';
import LottieSearch from '../../Lottie/98877-search.json';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import DigestoContainer from '../DigestoContainer/DigestoContainer';

const options = {
	animationData: LottieSearch,
	autoplay: true,
	loop: true,
	style: {
		width: '60%',
	},
};

const SearchLegislacion = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<div className='leg-landing-container'>
				<div className='leg-text-container'>
					<h1 className='leg-title'>Buscador Digesto Municipal</h1>
					<input
						placeholder='Escribí acá para buscar'
						className='leg-input'
						onChange={(event) =>
							setSearchTerm(
								event.target.value
									.normalize('NFD')
									.replace(/[\u0300-\u036f]/g, '')
									.toLocaleLowerCase()
							)
						}
						search={searchTerm}
					></input>
					<img
						src={dots}
						className='home-dots'
						alt='separador puntos de colores'
					/>
				</div>
				<div className='leg-img-container'>
					<Lottie {...options} />
				</div>
			</div>
			<DigestoContainer />
		</>
	);
};

export default SearchLegislacion;
