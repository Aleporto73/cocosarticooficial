import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Checkout from './pages/Checkout';
import Terms from './pages/Terms';
import CartSidebar from './components/CartSidebar';
import { Product, CartItem } from './types';

interface User {
  name: string;
  avatar: string;
  discriminator: string;
}

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prev => prev.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => setCart([]);

  const handleLogin = () => {
    // Simulate Discord OAuth login
    const mockUser: User = {
      name: 'ExploradorArtico',
      avatar: 'https://files.catbox.moe/trwo5z.png',
      discriminator: '#0001'
    };
    setUser(mockUser);
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header 
          cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
          onOpenCart={() => setIsCartOpen(true)}
          user={user}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onAddToCart={addToCart} user={user} onLogin={handleLogin} />} />
            <Route path="/loja" element={<Shop onAddToCart={addToCart} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} user={user} onLogin={handleLogin} />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </main>

        <Footer />

        <CartSidebar 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
        />
      </div>
    </Router>
  );
};

export default App;
