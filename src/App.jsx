import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Pages/Contact';
import Cocktails from './Pages/Cocktails';
import Home from './Pages/Home'
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
                <Route path='/cocktails' element={<Cocktails/>}/>
            </Routes>

        </BrowserRouter>


        </>
    )
}