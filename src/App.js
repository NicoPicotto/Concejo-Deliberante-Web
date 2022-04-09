import React from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

//Views
import Home from './views/Home';
import Institucional from './views/Institucional';
import Legislacion from './views/Legislacion';
import Error from './views/Error';
import NavBar from './components/NavBar/NavBar';
import NewsDetailView from './views/NewsDetailView';
import Footer from './components/Footer/Footer';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/institucional' element={<Institucional />} />
					<Route path='/legislacion' element={<Legislacion />} />
					<Route path='/news/:id' element={<NewsDetailView />} />
					<Route path='*' element={<Error />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
};

export default App;
