import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import Header from './components/Header';
import React from 'react'

function App() {
  return (
  // eslint-disable-next-line react/react-in-jsx-scope
  <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/add' element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
