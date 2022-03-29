import React, { useState } from 'react';
import Lottie from 'lottie-react';
import dots from '../../img/dots-01.png';
import LottieSearch from '../../Lottie/98877-search.json';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
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
					<div className='leg-text-container'>
						<div>
							Podés buscar la normativa que te interese por:{' '}<br />
							<Tippy content={<span>Por ejemplo: "Juventud"</span>}>
								<span className='tooltip-word'>Palabra clave</span>
							</Tippy>
							, por{' '}
							<Tippy
								content={<span>En formato AAAA. Por ejemplo: "2007"</span>}
							>
								<span className='tooltip-word'> año de sanción</span>
							</Tippy>
							,
							por{' '}
							<Tippy content={<span>Por ejemplo: "057"</span>}>
								<span className='tooltip-word'> número de ordenanza</span>
							</Tippy>{' '}
							o por{' '}
							<Tippy
								content={
									<span>
										Podés elegir entre los temas:
										<br /> Organización Institucional
										<br /> Empleo público
										<br />
										Documentación
										<br />
										Defensa Civil
										<br />
										Cultura y Educación
										<br />
										Presupuesto y Contrataciones
										<br />
										Contribuciones
										<br /> Salud Pública
										<br />
										Promoción Social
										<br />
										Ejido Muncipal
										<br />
										Obras y servicios públicos
										<br />
										Higiene urbana
										<br />
										Ordenamiento urbano y edificación
										<br />
										Tránsito
										<br />
										Transporte público
										<br />
										Industrias y comercios
										<br />
										Bromatología
										<br />
										Medio Ambiente
										<br />
										Moralidad
										<br />
										Poder de policía
									</span>
								}
							>
								<span className='tooltip-word'> tema</span>
							</Tippy>
							.
						</div>
					</div>
				</div>
				<div className='leg-img-container'>
					<Lottie {...options} />
				</div>
			</div>
			<DigestoContainer search={searchTerm} />
		</>
	);
};

export default SearchLegislacion;
