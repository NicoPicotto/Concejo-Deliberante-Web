import React from 'react';
import logoMuni from '../../img/logomuni-01.png';

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-logo-container'>
				<a href='https://www.generalcabrera.gob.ar/' target='_blank'>
					<img src={logoMuni} className='footer-logo' />
				</a>
			</div>
			<div className='footer-datos-contaier'>
				<ul>
					<li>
						<span>DIRECCIÓN:</span> Bv. Buenos Aires 1051, General Cabrera,
						Provincia de Córdoba, Argentina
					</li>
					<li>
						<span>CP:</span> X5809AWH
					</li>
					<li>
						<span>TEL:</span> (0358) 4930660/61 - (0358) 4930141
					</li>
					<li>
						<span>FAX:</span> (0358) 4930120
					</li>
				</ul>
			</div>
			<div className='footer-form-container'>
				<form className='form-container'>
					<h3 className='form-title'> ¡Dejanos tu mensaje!</h3>
					<input
						className='form-input'
						name='name'
						placeholder='Nombre'
					></input>
					<input
						className='form-input'
						name='email'
						placeholder='E-mail'
					></input>
					<textarea
						className='form-textarea'
						rows='4'
						cols='50'
						placeholder='Mensaje'
						name='message'
					></textarea>
					<input type='submit' value='Enviar mensaje' className='form-submit'/>
				</form>
			</div>
		</div>
	);
};

export default Footer;
