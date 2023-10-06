import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Activity from './pages/Activity';
import Promo from './pages/Promo';
import About from './pages/About';

function App() {

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/activty' element={<Activity/>}/>
        <Route path='/promo' element={<Promo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
      
  );
}

export default App;
