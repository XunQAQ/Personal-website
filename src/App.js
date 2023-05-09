import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import {Error404}  from "./components/pages/Error404.js";
import HomePage from './components/pages/HomePage';

function App() {
	return (
		<>
		<Routes>
	    	<Route path="/" element={<HomePage />} />
			<Route path="/*" element={<Error404 />} />
    	</Routes>
		</>
	)
}

export default App;
