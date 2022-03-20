import React from 'react';
import Digestos from '../Digestos/Digestos';

const DigestoList = ({ data, search }) => {
	return (
		<div className='digesto-list-container'>
			{data
				.filter((val) => {
					if (search == '') {
						return val;
					} else if (val.title.toLowerCase().includes(search.toLowerCase())) {
						return val;
					}
				})
				.map((val, key) => {
					return <Digestos data={val} key={key} />;
				})}
		</div>
	);
};

export default DigestoList;
