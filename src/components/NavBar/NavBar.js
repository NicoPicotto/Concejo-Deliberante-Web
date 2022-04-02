import React from 'react';
import { Nav, Container, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
	return (
		<div className='nav-master'>
			<Navbar
				collapseOnSelect
				expand='lg'
				className='navbar-container'
				variant='danger'
			>
				<Container>
					<Navbar.Brand to='/'>
						<Link to='/' variant='light' className='navbar-logo'>
							HONORABLE CONCEJO DELIBERANTE
						</Link>
					</Navbar.Brand>
					<Navbar.Toggle
						aria-controls='responsive-navbar-nav'
						className='burger'
					>
						<span>
							<AiOutlineMenu />
						</span>
					</Navbar.Toggle>
					<Navbar.Collapse
						id='responsive-navbar-nav'
						className='justify-content-end'
					>
						<Nav className='navbar-links'>
							<NavLink eventKey='1'>
								<Link to='/' variant='light' className='navbar-link-button'>
									{' '}
									HOME
								</Link>
							</NavLink>
							<NavLink eventKey='2'>
								<Link
									to='/institucional'
									variant='light'
									className='navbar-link-button'
								>
									INSTITUCIONAL
								</Link>
							</NavLink>
							<NavLink eventKey='3'>
								<Link
									to='/legislacion'
									variant='light'
									className='navbar-link-button'
								>
									LEGISLACIÓN
								</Link>
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default NavBar;
