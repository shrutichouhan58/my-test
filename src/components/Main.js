import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';


const Main = () => {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />}></Route>
                <Route exact path='/login' element={<Login />}></Route>
                <Route exact path='/dashboard' element={<Dashboard />}></Route>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Main
