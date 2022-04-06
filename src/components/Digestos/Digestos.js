import React from 'react';
import { Card, Button, CardGroup } from 'react-bootstrap';
import {
	AiFillFilePdf,
	AiFillCheckCircle,
	AiFillCloseCircle,
} from 'react-icons/ai';

const Digestos = ({ data }) => {
	const fecha = data.date.toDate().toLocaleDateString('es-ES');

	return (
		<div className='dig-card-master'>
			<Card className='dig-card-container'>
				<Card.Header className='dig-card-number'>
					Ordenanza N° {data.number}
				</Card.Header>
				<Card.Body className='dig-card-body'>
					<Card.Text className='dig-card-text'>{data.title}</Card.Text>
					<Card.Text className='dig-card-tema'>Tema: {data.tema}</Card.Text>
					<CardGroup className='row-2'>
						<Card.Text className='dig-card-date'>Sancionada: {fecha}</Card.Text>
						{data.vigente ? (
							<Card.Text className='dig-card-vigente'>
								<AiFillCheckCircle /> Vigente
							</Card.Text>
						) : (
							<Card.Text className='dig-card-vigente-false'>
								<AiFillCloseCircle /> No Vigente
							</Card.Text>
						)}
					</CardGroup>
				</Card.Body>
				<Button className='dig-card-download' href={data.link} target='_blank'>
					Descargar PDF <AiFillFilePdf />
				</Button>
			</Card>
		</div>
	);
};

export default Digestos;
