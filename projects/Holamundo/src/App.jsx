import React from 'react';

import Home from './Pages/Home';
import Contact from './Pages/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

export function App() {

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                    <Route index element={<Home/>}/>
                    <Route path='*' element={<p>ERROR 404.</p>}/>

                <Route path='/contact' element={<Contact/>}/>
            </Routes>

        </BrowserRouter>


        </>
    )
}