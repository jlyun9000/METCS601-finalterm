/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * App.js file
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Education from './pages/Education';
import Gallary from './pages/Gallary';
import KkomiGallary from './pages/KkomiGallary';
const App = () => {

	return (
		<div className='App'>
			<Router basename="/METCS601-finalterm">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/education" element={<Education />}/>
					<Route path="/gallary" element={<Gallary />}/>
					<Route path="/kkomi" element={<KkomiGallary />}/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;