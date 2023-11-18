import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Main from './components/Main'
import Entry from './components/Entry'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Entry />} />
      <Route path="/main" element={<Main />} />
    </Routes> 
  );
}

export default App;
