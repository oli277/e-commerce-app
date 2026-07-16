import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { WishListProvider } from "./CustomHooks/WishListContext"
import { CartProvider } from "./CustomHooks/CartContext"
import { Toaster } from 'react-hot-toast'
import Navigation from './components/NavigationBar/navigation';
import Footer from './components/Footer/footer';


import HomePage from './pages/HomePage';
// import ProductsPage from './pages/ProductsPage';
// import CategoriesPage from './pages/CategoriesPage';
import CartPage from './pages/CartPage';
// import WishListPage from './pages/WishListPage';

function App() {
  return (
    <CartProvider>
      <WishListProvider>

     
   
    <Router>
      <div className="flex flex-col min-h-screen">

        <Toaster position="top-center" />
      
        <Navigation />

       
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="/products" element={<ProductsPage />} />
            <Route path="/categories" element={<CategoriesPage />} /> */}
            <Route path="/cart" element={<CartPage />} />
            {/* <Route path="/wishlist" element={<WishListPage />} /> */}
          </Routes>
        </main>

       
        <Footer />
      </div>
    </Router>
     </WishListProvider>
     </CartProvider>
  );
}

export default App;