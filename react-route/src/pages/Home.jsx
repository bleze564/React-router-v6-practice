import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import React from 'react';

const Home = () => {
    return (

            <div>
                <p>
                    lorem
                </p>
                <NavLink to="/home/current">Current Home</NavLink>
        
                    <Route path="/home/current" element={<h1>Current Home</h1>} />

            </div>

    );
}

export default Home;
