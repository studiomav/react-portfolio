import * as React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/resume';

export default function Main() {
  return (
    <Routes> {}
      <Route exact path='/' element={<About/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/portfolio' element={<Portfolio/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/resume' element={<Resume/>}></Route>
    </Routes>
  );
}