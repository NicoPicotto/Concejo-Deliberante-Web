import React, { useState, useEffect } from 'react';
import { collection, query, getDocs } from 'firebase/firestore';
import './NewsContainer.css';
//Firebase
import { db } from '../../firebase/firebaseConfig';
import NewsList from '../NewsList/NewsList';

const NewsContainer = () => {
	const [newsData, setNewsData] = useState([]);

	useEffect(() => {
		const getNews = async () => {
			const docs = [];
			const q = query(collection(db, 'news'));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setNewsData(docs);
		};
		getNews();
	}, []);

	return (
		<div className='news-container'>
			{newsData.map((news) => {
				return <NewsList data={news} key={news.id} />;
			})}
		</div>
	);
};

export default NewsContainer;
