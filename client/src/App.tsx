import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import ProductUploadPage from './pages/products/upload';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Routes>
        <Route path="/products/upload" element={<ProductUploadPage />} />
      </Routes>
    </div>
  );
}

export default App;
