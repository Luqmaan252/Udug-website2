import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import PaymentPage from './pages/PaymentPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
