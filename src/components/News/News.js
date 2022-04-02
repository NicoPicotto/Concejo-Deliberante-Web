import React from 'react';
import { Link } from 'react-router-dom';

const News = ({ data }) => {
	return (
		<div className='news-card-master'>
			<Link to={`news/${data.id}`} style={{ textDecoration: 'none' }}>
				<div
					className='news-card-container'
					style={{
						backgroundImage: `url(${data.img})`,
						backgroundSize: '100%',
						backgroundRepeat: "no-repeat"
					}}
				>
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
