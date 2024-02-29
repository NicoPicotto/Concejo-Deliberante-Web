import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Loading from '../Loading/Loading';
import DigestoList from '../DigestoList/DigestoList';
import Lottie from 'lottie-react';
import dots from '../../img/dots-01.png';
import LottieSearch from '../../Lottie/98877-search.json';

const options = {
	animationData: LottieSearch,
	autoplay: true,
	loop: true,
	style: {
		width: '80%',
	},
};

const DigestoContainer = () => {
	const [digestoData, setDigestoData] = useState([]);
	const [loading, setLoading] = useState(false);

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const searchTermLower = searchTerm.toLowerCase();

		// Primero, ordenamos los datos
		const sortedData = [...digestoData].sort((a, b) => {
			const regex = /\d+/;
			const matchA = a.number?.match(regex);
			const matchB = b.number?.match(regex);
			const numberA = matchA ? parseInt(matchA[0], 10) : 0;
			const numberB = matchB ? parseInt(matchB[0], 10) : 0;

			return numberB - numberA;
		});

		// Luego, filtramos los datos ya ordenados
		const filtered = sortedData.filter(
			(item) =>
				item.tema?.toLowerCase().includes(searchTermLower) ||
				item.title?.toLowerCase().includes(searchTermLower) ||
				item.number?.includes(searchTerm) ||
				item.keywords?.some((keyword) =>
					keyword.toLowerCase().includes(searchTermLower)
				)
		);

		setFilteredData(filtered);
	}, [digestoData, searchTerm]);

	useEffect(() => {
		const getDigesto = async () => {
			setLoading(true);
			const docs = [];
			const q = query(collection(db, 'digesto'), orderBy('date', 'desc'));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setLoading(false);
			setDigestoData(docs);
		};
		getDigesto();
	}, []);

	return (
		<>
			<div className='leg-landing-container'>
				<div className='leg-text-container'>
					<h1 className='leg-title'>Buscador Digesto Municipal</h1>
					<h2 className='home-text'>
						Aquí podrás buscar todas las ordenanzas por título, tema, número y
						fecha.
					</h2>
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

			<div className='leg-firebase-container'>
				<DigestoList
					filteredData={filteredData}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
				{loading && <Loading />}
			</div>
		</>
	);
};

export default DigestoContainer;
