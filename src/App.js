import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Views
import Home from './views/Home';
import Institucional from './views/Institucional';
import Legislacion from './views/Legislacion';
import Error from './views/Error';
import NavBar from './components/NavBar/NavBar';
import NewsDetailView from './views/NewsDetailView';
import Footer from './components/Footer/Footer';
import ScrolToTop from './components/ScrollToTop/ScrollToTop';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import { ContextProvider } from './Context/AuthContext';

const App = () => {
	return (
		<ContextProvider>
			<Router>
				<ScrolToTop />
				<div className='App'>
					<NavBar />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/institucional' element={<Institucional />} />
						<Route path='/legislacion' element={<Legislacion />} />
						<Route path='/admin' element={<Dashboard />} />
						<Route path='/login' element={<Login />} />
						<Route path='/news/:id' element={<NewsDetailView />} />
						<Route path='*' element={<Error />} />
					</Routes>
					<Footer />
				</div>
			</Router>
		</ContextProvider>
	);
};

export default App;
