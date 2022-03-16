import React from 'react';
import News from '../News/News';
import './NewsList.css';

const NewsList = ({ data }) => {
	return (
		<div className='news-list-container'>
      {data.map((news) => {
				return <News data={news} key={news.id} />;
			})}
		</div>
	);
};

export default NewsList;
