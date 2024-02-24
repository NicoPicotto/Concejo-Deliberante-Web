import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase/firebaseConfig';
import { db } from '../../firebase/firebaseConfig';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const CargarOrdenanza = () => {
	const [title, setTitle] = useState('');
	const [tema, setTema] = useState('');
	const [number, setNumber] = useState('');
	const [date, setDate] = useState('');
	const [vigente, setVigente] = useState(true);
	const [imageFile, setImageFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const uploadImage = async (file) => {
		if (!file) return null;

		const storageRef = ref(storage, `images/${file.name}`);
		const uploadTask = uploadBytesResumable(storageRef, file);

		return new Promise((resolve, reject) => {
			uploadTask.on(
				'state_changed',
				(snapshot) => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
					console.log('Upload is ' + progress + '% done');
				},
				(error) => {
					console.log(error);
					reject(error);
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
						console.log('File available at', downloadURL);
						resolve(downloadURL);
					});
				}
			);
		});
	};

	const createNewsDocument = async (
		title,
		tema,
		number,
		firestoreTimestamp,
		vigente,
		imageUrl
	) => {
		try {
			const docRef = await addDoc(collection(db, 'digesto'), {
				title,
				tema,
				number,
				date: firestoreTimestamp,
				vigente,
				link: imageUrl,
			});

			setSuccess('¡Documento creado! ', docRef.id);
			console.log('Documento creado: ', docRef.id);
			setError('');
		} catch (e) {
			setError('Error adding document: ', e);
			console.log('Error adding document: ', e);
			setSuccess('');
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Convertir la cadena de fecha a un objeto Date de JavaScript
		const dateObject = new Date(date);
		// Asegúrate de que la fecha está en UTC
		dateObject.setMinutes(
			dateObject.getMinutes() + dateObject.getTimezoneOffset()
		);
		// Convertir el objeto Date a un Timestamp de Firestore
		const firestoreTimestamp = Timestamp.fromDate(dateObject);

		if (imageFile) {
			const imageUrl = await uploadImage(imageFile);
			await createNewsDocument(
				title,
				tema,
				number,
				firestoreTimestamp,
				vigente,
				imageUrl
			);
			setTitle('');
			setTema('');
			setNumber('');
			setDate('');
			setImageFile(null);
			setIsLoading(false);
			setError('');
		} else {
			setError('No se ha seleccionado ninguna imagen');
			setSuccess('');
		}
	};

	return (
		<div className='wrapper'>
			<form onSubmit={handleSubmit}>
				<h2>Cargar Ordenanza</h2>
				<div className='form-wrapper'>
					<label>Titulo</label>
					<input
						type='text'
						value={title}
						name='title'
						placeholder='Incremento de Haberes a los Agentes Municipales'
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label>Tema</label>
					<input
						type='text'
						value={tema}
						name='tema'
						placeholder='Empleo Municipal'
						onChange={(e) => setTema(e.target.value)}
					/>
					<label>Numero</label>
					<input
						type='text'
						value={number}
						name='number'
						placeholder='2099/24'
						onChange={(e) => setNumber(e.target.value)}
					/>
					<label>Fecha de sanción</label>
					<input
						type='date'
						value={date}
						name='date'
						onChange={(e) => setDate(e.target.value)}
					/>
					<label>¿Vigente?</label>
					<input
						type='checkbox'
						className='checkbox'
						checked={vigente}
						onChange={(e) => setVigente(e.target.checked)}
					/>
					<label>PDF</label>
					<input
						type='file'
						onChange={(e) => setImageFile(e.target.files[0])}
					/>
					<Button type='submit'>
						{isLoading ? (
							<Spinner animation='border' size='sm' variant='light' />
						) : (
							'CARGAR NUEVA ORDENANZA'
						)}
					</Button>
					{error !== '' && (
						<div className='error'>
							<p>{error}</p>
						</div>
					)}
					{success !== '' && (
						<div className='success'>
							<p>{success}</p>
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default CargarOrdenanza;
