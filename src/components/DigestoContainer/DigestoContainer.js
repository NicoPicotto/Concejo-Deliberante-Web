import React, { useState, useEffect } from 'react';
import {
	collection,
	query,
	getDocs,
	limit,
	orderBy,
	where,
} from 'firebase/firestore';
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
		width: '60%',
	},
};

const DigestoContainer = () => {
	const [digestoData, setDigestoData] = useState([]);
	const [loading, setLoading] = useState(false);

	const [searchTerm, setSearchTerm] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const searchTermLower = searchTerm.toLowerCase();

		const filtered = digestoData.filter(
			(item) =>
				item.tema?.toLowerCase().includes(searchTermLower) ||
				item.title?.toLowerCase().includes(searchTermLower) ||
				item.number?.includes(searchTerm) || // Asumiendo que `number` es siempre una cadena
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
					<input
						placeholder='Escribí acá para buscar'
						className='leg-input'
						type='text'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
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

			<div className='leg-firebase-container'>
				<DigestoList filteredData={filteredData} />
				{loading && <Loading />}
			</div>
		</>
	);
};

export default DigestoContainer;
