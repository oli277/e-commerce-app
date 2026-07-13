import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Navigation from './components/NavigationBar/navigation';
import Footer from './components/Footer/footer';

// Pages
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
import WishListPage from './pages/WishListPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
      
        <Navigation />

       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/wishlist" element={<WishListPage />} />
          </Routes>
        </main>

       
        <Footer />
      </div>
    </Router>
  );
}

export default App;