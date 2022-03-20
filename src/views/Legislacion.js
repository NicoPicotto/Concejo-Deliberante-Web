import React from 'react';
import DigestoContainer from '../components/DigestoContainer/DigestoContainer';
import SearchLegislacion from '../components/SearchLegislacion/SearchLegislacion';

const Legislacion = () => {
	return (
		<div>
			<SearchLegislacion />
			<DigestoContainer />
		</div>
	);
};

export default Legislacion;
