import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { Spinner } from 'react-bootstrap';

const LoginForm = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');

	const { login } = useAuth();

	const [user, setUser] = useState({
		email: '',
		password: '',
	});

	const navigate = useNavigate();

	const submitHandler = async (e) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			await login(user.email, user.password);
			setIsLoading(false);
			navigate('/admin');
		} catch (error) {
			setError('El mail o contraseña son incorrectas');
			setIsLoading(false);
		}
	};

	return (
		<div className='home-container'>
			<form className='inputs-container' onSubmit={submitHandler}>
				<h1 className='home-title'>Acceder al panel de Admin</h1>
				<input
					placeholder='email@gmail.com'
					className='leg-input'
					onChange={(e) => setUser({ ...user, email: e.target.value })}
					type='email'
					isRequired
				/>
				<input
					placeholder='***********'
					onChange={(e) => setUser({ ...user, password: e.target.value })}
					className='leg-input'
					type='password'
					isRequired
				/>
				<Button type='submit' className='inputs-btn'>
					{isLoading ? (
						<Spinner animation='border' size='sm' variant='light' />
					) : (
						'Ingresar'
					)}
				</Button>
				{error !== '' && (
					<div className='error'>
						<p>{error}</p>
					</div>
				)}
			</form>
		</div>
	);
};

export default LoginForm;
