import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
	return (
		<div className='spinner'>
			<Spinner animation="border" variant="light"/>
		</div>
	);
};

export default Loading;
