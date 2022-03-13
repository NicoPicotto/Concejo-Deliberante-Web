import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../../img/logo-01.png';
import './NavBar.css';

const NavBar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='lg' className='navbar-container'>
				<Container>
					<Navbar.Brand to='/'>
						<img src={img1} className='navbar-logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse
						id='responsive-navbar-nav'
						className='justify-content-end'
					>
						<Nav className='navbar-links'>
							<Link to='/' variant='light' className='navbar-link-button'>
								HOME
							</Link>
							<Link to='/institucional' variant='light' className='navbar-link-button'>
								INSTITUCIONAL
							</Link>
							<Link to='/legislacion' variant='light' className='navbar-link-button'>
								LEGISLACIÓN
							</Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;