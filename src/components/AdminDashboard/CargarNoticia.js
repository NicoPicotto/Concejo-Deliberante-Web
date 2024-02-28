import React, { useState, useEffect } from 'react';
import { storage } from '../../firebase/firebaseConfig';
import { db } from '../../firebase/firebaseConfig';
import {
	collection,
	addDoc,
	serverTimestamp,
	query,
	getDocs,
	orderBy,
	deleteDoc,
	doc,
} from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button } from 'react-bootstrap';
import { Spinner } from 'react-bootstrap';

const CargarNoticia = () => {
	const [title, setTitle] = useState('');
	const [subtitle, setSubtitle] = useState('');
	const [content, setContent] = useState('');
	const [imageFile, setImageFile] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	const [newsData, setNewsData] = useState([]);

	const handleContentChange = (content) => {
		setContent(content);
	};

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

	const createNewsDocument = async (title, subtitle, content, imageUrl) => {
		try {
			const docRef = await addDoc(collection(db, 'news'), {
				title,
				subtitle,
				content,
				img: imageUrl,
				date: serverTimestamp(),
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

		if (imageFile) {
			const imageUrl = await uploadImage(imageFile);
			await createNewsDocument(title, subtitle, content, imageUrl);
			setTitle('');
			setSubtitle('');
			setContent('');
			setImageFile(null);
			setIsLoading(false);
			setError('');
		} else {
			setError('No se ha seleccionado ninguna imagen');
			setSuccess('');
		}
	};

	useEffect(() => {
		const getNews = async () => {
			const docs = [];
			const q = query(collection(db, 'news'), orderBy('date', 'desc'));
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
			});

			setNewsData(docs);
		};
		getNews();
	}, [success]);

	const deleteNews = async (newsId) => {
		try {
			await deleteDoc(doc(db, 'news', newsId));
			setSuccess('Documento eliminado con éxito');
			// Opcional: Actualizar el estado para reflejar el cambio en la interfaz de usuario
		} catch (error) {
			console.error('Error al eliminar el documento: ', error);
		}
	};

	return (
		<div className='wrapper'>
			<form onSubmit={handleSubmit}>
				<h2>Cargar Noticia</h2>
				<div className='form-wrapper'>
					<label>Titulo</label>
					<input
						type='text'
						value={title}
						name='title'
						onChange={(e) => setTitle(e.target.value)}
					/>
					<label>Subtitulo</label>
					<input
						type='text'
						value={subtitle}
						name='subtitle'
						onChange={(e) => setSubtitle(e.target.value)}
					/>
					<label>Contenido</label>
					<ReactQuill
						value={content}
						onChange={(newValue, delta, source, editor) => setContent(newValue)}
					/>
					<label>Imagen</label>
					<input
						type='file'
						onChange={(e) => setImageFile(e.target.files[0])}
					/>
					<Button type='submit'>
						{isLoading ? (
							<Spinner animation='border' size='sm' variant='light' />
						) : (
							'CARGAR NUEVA NOTICIA'
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
			<div className='lista-noticias'>
				<h4>Lista de noticias publicadas</h4>
				<ul>
					{newsData &&
						newsData.map((noticia) => (
							<div key={noticia.id} className='list-item'>
								<li>{noticia.title}</li>{' '}
								<button onClick={() => deleteNews(noticia.id)}>Eliminar</button>
							</div>
						))}
				</ul>
			</div>
		</div>
	);
};

export default CargarNoticia;
