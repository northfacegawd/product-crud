import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Layout from './components/layout';
import ProductUploadPage from './pages/products/upload';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/products/upload" element={<ProductUploadPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
