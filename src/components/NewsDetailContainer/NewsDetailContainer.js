import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import { useParams } from 'react-router';
import { db } from '../../firebase/firebaseConfig';
import NewsDetail from '../NewsDetail/NewsDetail';

const NewsDetailContainer = () => {
	const [itemDetail, setItemDetail] = useState([]);

	const paramsID = useParams();

	useEffect(() => {
		const getNews = async () => {
			const docs = [];
			const q = query(
				collection(db, 'news'),
				where(documentId(), '==', paramsID.id)
			);
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setItemDetail(docs);
		};
		getNews();
	}, [paramsID]);

	return (
    <div className='news-detail-container'>
      {itemDetail.map((detalles) => {
        return <NewsDetail key={detalles.id} data={detalles}/>
      })}
    </div>
  )
};

export default NewsDetailContainer;
