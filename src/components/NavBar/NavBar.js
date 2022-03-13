import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import img1 from '../../img/logo-01.png';
import './NavBar.css';

const NavBar = () => {
	return (
		<div>
			<Navbar collapseOnSelect expand='lg' className='navbar-container'>
				<Container>
					<Navbar.Brand href='#home'>
						<img src={img1} className='navbar-logo' />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse
						id='responsive-navbar-nav'
						className='justify-content-end'
					>
						<Nav className='navbar-links'>
							<Nav.Link href='#deets' className='navbar-link' variant='light'>
								HOME
							</Nav.Link>
							<Nav.Link href='#deets' className='navbar-link'>
								INSTITUCIONAL
							</Nav.Link>
							<Nav.Link href='#deets' className='navbar-link'>
								LEGISLACIÓN
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
