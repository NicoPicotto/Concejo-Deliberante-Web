import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Views
import Home from './views/Home';
import Institucional from './views/Institucional';
import Legislacion from './views/Legislacion';
import Error from './views/Error';
import NavBar from './components/NavBar/NavBar';

const App = () => {
	return (
		<Router>
			<div className='App'>
        <NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/institucional' element={<Institucional />} />
					<Route path='/legislacion' element={<Legislacion />} />
					<Route path='*' element={<Error />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
