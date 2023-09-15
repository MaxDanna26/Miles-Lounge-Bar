import React from 'react';
import './App.css';

import Header  from './shared/Header';
import Home from './Pages/home';
import About from './Pages/about';
import Footer from './shared/Footer';

export function App() {

    return (
        <>
            <Header />

            <About />

            <Home />

            <Footer />
        </>
    )
}