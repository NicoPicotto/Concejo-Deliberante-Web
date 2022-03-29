import React, { useState, useEffect } from 'react';
import { collection, query, getDocs,  limit, orderBy, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Loading from '../Loading/Loading';
import DigestoList from '../DigestoList/DigestoList';
import { Button } from 'react-bootstrap';

const DigestoContainer = ({search}) => {
	const [digestoData, setDigestoData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [moreDigesto, setMoreDigesto] = useState(8);

	//Función para cargar de a 3 noticias más
	const loadMoreDigesto = () => {
		setMoreDigesto(moreDigesto + 8);
	};

	useEffect(() => {
		if (search === "") {
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
		} else {
			const getDigesto = async () => {
				setLoading(true);
				const docs = [];
				const q = query(
					collection(db, 'digesto'),
					where("keywords", "array-contains", search)
					// orderBy('date', 'desc'),
					// limit(moreDigesto)
				);
				const querySnapshot = await getDocs(q);
				querySnapshot.forEach((doc) => {
					docs.push({ ...doc.data(), id: doc.id });
				});
				setLoading(false);
				setDigestoData(docs);
			};
			getDigesto();
		}
	}, [moreDigesto, search]);

	return (
		<div className='leg-firebase-container'>
			<DigestoList data={digestoData} search={search}/>
			{loading && <Loading />}
			<Button className='leg-container-button' onClick={loadMoreDigesto}>
				Cargar más documentos
			</Button>
		</div>
	);
};

export default DigestoContainer;
