import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, limit, orderBy } from 'firebase/firestore';
import './NewsContainer.css';
import { db } from '../../firebase/firebaseConfig';
import NewsList from '../NewsList/NewsList';
import Loading from '../Loading/Loading';
import { Button } from 'react-bootstrap';

const NewsContainer = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [moreNews, setMoreNews] = useState(3);

	//Función para cargar de a 3 noticias más
	const loadMoreNews = () => {
		setMoreNews(moreNews + 3);
	};

	useEffect(() => {
		const getNews = async () => {
			setLoading(true);
			const docs = [];
			const q = query(collection(db, 'news'), orderBy('date'), limit(moreNews));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setLoading(false);
			setNewsData(docs);
		};
		getNews();
	}, [moreNews]);

	return (
		<div className='news-container'>
			<NewsList data={newsData} />
			{loading && <Loading />}
			<Button className='news-container-button' onClick={loadMoreNews}>
				Cargar más noticias
			</Button>
		</div>
	);
};

export default NewsContainer;
