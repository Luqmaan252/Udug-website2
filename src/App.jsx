import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import PaymentPage from './pages/PaymentPage';
import ProfilePage from './pages/ProfilePage';
import ContactPage from './pages/ContactPage';
import OrdersPage from './pages/OrdersPage';

import OurStoryPage from './pages/OurStoryPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
