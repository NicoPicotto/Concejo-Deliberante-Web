import React, { useState, useEffect } from 'react';
import { MdOutlineClose, MdOutlineCheck, MdFileDownload } from 'react-icons/md';

const DigestoList = ({ filteredData, setSearchTerm, searchTerm }) => {
	// const [searchTerm, setSearchTerm] = useState('');
	// const [filteredData, setFilteredData] = useState([]);

	// useEffect(() => {
	// 	const searchTermLower = searchTerm.toLowerCase();

	// 	const filtered = data.filter(
	// 		(item) =>
	// 			item.tema?.toLowerCase().includes(searchTermLower) ||
	// 			item.title?.toLowerCase().includes(searchTermLower) ||
	// 			item.number?.includes(searchTerm) || // Asumiendo que `number` es siempre una cadena
	// 			item.keywords?.some((keyword) =>
	// 				keyword.toLowerCase().includes(searchTermLower)
	// 			)
	// 	);

	// 	setFilteredData(filtered);
	// }, [data, searchTerm]);

	function formatDate(timestamp) {
		const date = new Date(timestamp.seconds * 1000);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JavaScript van de 0 a 11
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}

	return (
		<div className='digesto-list-container'>
			<input
				placeholder='Escribí acá para buscar'
				className='leg-input'
				type='text'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			></input>
			<table className='table'>
				<thead>
					<tr>
						<th>Título</th>
						<th>Tema</th>
						<th>Número</th>
						<th>Fecha</th>
						<th className='centered'>Vigencia</th>
						<th className='centered'>Descarga</th>
					</tr>
				</thead>
				<tbody>
					{filteredData.map((item) => (
						<tr key={item.id}>
							<td className='table-title'>{item.title}</td>
							<td>{item.tema}</td>
							<td>{item.number}</td>
							<td>{formatDate(item.date)}</td>
							<td className='centered'>
								{item.vigente === true ? (
									<MdOutlineCheck />
								) : (
									<MdOutlineClose />
								)}
							</td>
							<td className='centered'>
								<a href={item.link} download target='_blank' rel='noreferrer'>
									<MdFileDownload color='black' />
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{/* {filteredData.map((news) => (
				<Digestos data={news} key={news.id} />
			))} */}
		</div>
	);
};

export default DigestoList;
