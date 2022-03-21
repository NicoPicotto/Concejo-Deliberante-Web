import React, {useState} from 'react';
import Lottie from 'lottie-react';
import dots from '../../img/dots-01.png';
import LottieSearch from '../../Lottie/98877-search.json';
import DigestoContainer from '../DigestoContainer/DigestoContainer';

const options = {
	animationData: LottieSearch,
	autoplay: true,
	loop: true,
	style: {
		width: '80%',
	},
};

const SearchLegislacion = () => {

	const [searchTerm, setSearchTerm] = useState('');

	return (
		<>
			<div className='leg-landing-container'>
				<div className='leg-text-container'>
					<h1 className='leg-title'>
						Buscador Digesto Municipal
					</h1>
					<input
						placeholder='Escribí acá para buscar'
						className='leg-input'
						onChange={(event) => setSearchTerm(event.target.value)}
						search={searchTerm}
					></input>
					<img src={dots} className='home-dots' />
					<h3 className='leg-text'>
						Aquí podrás buscar y encontrar todas las ordenanzas sancionadas hasta hoy.
					</h3>
				</div>
				<div className='leg-img-container'>
					<Lottie {...options} />
				</div>
			</div>
			<DigestoContainer search={searchTerm}/>
		</>
	);
};

export default SearchLegislacion;
