import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/home/index.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './pages/details/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="details/:id" element={<Details/>}/>
  </Routes>
  </BrowserRouter>,
)
