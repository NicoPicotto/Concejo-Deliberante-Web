import React from 'react';
import dots from '../../img/dots-01.png';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const NewsDetail = ({ data }) => {
	const fecha = data.date.toDate().toLocaleDateString('es-ES');

	return (
		<div className='news-detail'>
			<div className='news-detail-text'>
				<h1>{data.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: data.content }} />
				<img src={dots} alt='puntos separadores' />
				<h3>Fecha de publicación: {fecha}</h3>
				<Link to='/'>
					<Button className='news-detail-button'>Volver al home</Button>
				</Link>
			</div>
			<div className='news-img-container'>
				<img src={data.img} alt={data.title} />
			</div>
		</div>
	);
};

export default NewsDetail;
