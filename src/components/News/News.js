import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const News = ({ data }) => {
	return (
		<Link to={`news/${data.id}`} style={{textDecoration: "none"}}>
		<div className='news-card-container' style={{backgroundImage: `url(${data.img})`, backgroundSize: "100%"}}>
			<div className='card-news-text'>
				<h2 className='card-title'>{data.title}</h2>
				<hr class="solid"/>
				<h2 className='card-subtitle'>{data.subtitle}</h2>
			</div>
		</div>
		</Link>
	);
};

export default News;