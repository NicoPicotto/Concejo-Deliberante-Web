import React from 'react';
import News from '../News/News';
import './NewsList.css';

const NewsList = ({ data }) => {
	return (
		<div className='news-list-container'>
      <News data={data}/>
		</div>
	);
};

export default NewsList;
