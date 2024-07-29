import './stylesheets/main.css'

import Navbar from './Navbar';
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact';

import Capstone from './pages/grid/Capstone'
import CharaDesign from './pages/grid/CharaDesign'
import DNX from './pages/grid/DuelingNexus'
import GraphicDesign from './pages/grid/GraphicDesign'
import Illustrations from './pages/grid/Illustrations'
import Pawfee from './pages/grid/Pawfee'
import Reynbow from './pages/grid/Reynbow'
import VideoEdit from './pages/grid/VideoEdit'
import Vtuber from './pages/grid/Vtuber'
import OtherArt from './pages/grid/OtherArt'

import React, { useState } from 'react'
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {

  return (
    <main className='app'>
      <Router>
        <Navbar/>

        <Routes>
          <Route path='*' element={<Navigate to='/portfolio/portfolio'/>} />
          <Route path='/portfolio/about' element={<About />} />
          <Route path='/portfolio/resume' element={<Resume/>} />
          
          <Route path='/portfolio/portfolio' element={<Portfolio />} />

          <Route path='/portfolio/capstone' element={<Capstone/>} />
          <Route path='/portfolio/chara'    element={<CharaDesign/>} />
          <Route path='/portfolio/dnx'      element={<DNX/>} />
          <Route path='/portfolio/graphic'  element={<GraphicDesign/>} />
          <Route path='/portfolio/illust'   element={<Illustrations/>} />
          <Route path='/portfolio/pawfee'   element={<Pawfee/>} />
          <Route path='/portfolio/reynbow'  element={<Reynbow/>} />
          <Route path='/portfolio/video'    element={<VideoEdit/>} />
          <Route path='/portfolio/vtuber'   element={<Vtuber/>} />
          <Route path='/portfolio/other'    element={<OtherArt/>} />

          <Route path='/portfolio/contact' element={<Contact/>} />
        </Routes>
      </Router>  
    </main>
  );
}

export default App;
