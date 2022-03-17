import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './News.css';

const News = ({ data }) => {
	return (
		<div className='news-card-container'>
			<Card style={{ width: '18rem' }}>
				<Card.Img variant='top' src={data.img} />
				<Card.Body>
					<Card.Title className='card-news-title'>{data.title}</Card.Title>
					<Card.Text>{data.subtitle}</Card.Text>
					<Link to={`news/${data.id}`}>
						<Button className='card-news-button'>Ver noticia</Button>
					</Link>
				</Card.Body>
			</Card>
		</div>
	);
};

export default News;
