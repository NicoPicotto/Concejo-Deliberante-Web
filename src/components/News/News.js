import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ data }) => {
	console.table(data.img);
	return (
		<div className='news-card-master'>
			<Link to={`news/${data.id}`} style={{ textDecoration: 'none' }}>
				<div className='news-card-container'>
					<img src={data.img} alt={data.title} className='card-img' />
					<div className='card-news-text'>
						<h2 className='card-title'>{data.title}</h2>
						<hr className='solid' />
						<h2 className='card-subtitle'>{data.subtitle}</h2>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default News;
