import React from 'react';
import Digestos from '../Digestos/Digestos';

const DigestoList = ({ data, search }) => {
	return (
		<div className='digesto-list-container'>
			{data.map((news) => {
				return <Digestos data={news} key={news.id} />;
			})}
		</div>
	);
};

export default DigestoList;
