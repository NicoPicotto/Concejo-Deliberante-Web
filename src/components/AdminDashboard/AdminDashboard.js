import React from 'react';
import CargarNoticia from './CargarNoticia';
import CargarOrdenanza from './CargarOrdenanza';

const AdminDashboard = () => {
	return (
		<div className='admin-container'>
			<CargarNoticia />
            <CargarOrdenanza />
		</div>
	);
};

export default AdminDashboard;
