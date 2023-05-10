import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Home from './components/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import Details from './components/Details'

function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/details' element={<Details />} />
      </Routes>
    </React.Fragment> 
  )
}

export default App
