import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import './NewsContainer.css';
//Firebase
import { db } from '../../firebase/firebaseConfig';
import NewsList from '../NewsList/NewsList';
import Loading from '../Loading/Loading';

const NewsContainer = () => {
	const [newsData, setNewsData] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const getNews = async () => {
			setLoading(true);
			const docs = [];
			const q = query(collection(db, 'news'));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setLoading(false);
			setNewsData(docs);
		};
		getNews();
	}, []);

	return (
		<div className='news-container'>
			{loading && <Loading />}
			<NewsList data={newsData} />
		</div>
	);
};

export default NewsContainer;
