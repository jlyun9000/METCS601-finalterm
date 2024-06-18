/**
 * MET CS601 - Fianl Term Project
 * Written by Justin Yun
 * App.js file
 */
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Education from './pages/Education';
import Gallery from './pages/Gallery';
import KkomiGallery from './pages/KkomiGallery';
import Resume from './pages/Resume';
const App = () => {

	return (
		<div className='App'>
			<Router basename="/finalterm-jlyun">
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/education" element={<Education />}/>
					<Route path="/gallery" element={<Gallery />}/>
					<Route path="/resume" element={<Resume />}/>
					<Route path="/kkomi" element={<KkomiGallery />}/>
				</Routes>
			</Router>
		</div>
	);
};

export default App;