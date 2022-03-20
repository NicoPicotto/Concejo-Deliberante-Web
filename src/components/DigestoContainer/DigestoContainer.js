import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, limit, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Loading from '../Loading/Loading';
import DigestoList from '../DigestoList/DigestoList';
import { Button } from 'react-bootstrap';

const DigestoContainer = () => {
	const [digestoData, setDigestoData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [moreDigesto, setMoreDigesto] = useState(4);

	//Función para cargar de a 3 noticias más
	const loadMoreDigesto = () => {
		setMoreDigesto(moreDigesto + 4);
	};

	useEffect(() => {
		const getDigesto = async () => {
			setLoading(true);
			const docs = [];
			const q = query(
				collection(db, 'digesto'),
				orderBy('date', 'desc'),
				limit(moreDigesto)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setLoading(false);
			setDigestoData(docs);
		};
		getDigesto();
	}, [moreDigesto]);

	return (
		<div className='leg-firebase-container'>
			<DigestoList data={digestoData}/>
			{loading && <Loading />}
			<Button className='leg-container-button' onClick={loadMoreDigesto}>
				Cargar documentos
			</Button>
		</div>
	);
};

export default DigestoContainer;
