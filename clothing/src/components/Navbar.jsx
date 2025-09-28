import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartItemsCount } = useCart();
  const location = useLocation();
  const cartItemsCount = getCartItemsCount();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActiveLink = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Link to="/" className="navbar-logo">Velora</Link>

          {/* Desktop Navigation */}
          <div className="navbar-nav md:flex">
            {navItems.map(item => (
              <Link
                key={item.name}
                to={item.path}
                className={`navbar-nav-item ${isActiveLink(item.path) ? 'active' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="navbar-actions md:flex">
            <button className="navbar-icon-btn"><Search size={20} /></button>
            <Link to="/signup" className="navbar-icon-btn"><User size={20} /></Link>
            <Link to="/cart" className="navbar-cart-btn">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && <span className="navbar-cart-badge">{cartItemsCount}</span>}
            </Link>
          </div>

          {/* Mobile */}
          <div className="navbar-mobile md:hidden">
            <Link to="/cart" className="navbar-cart-btn">
              <ShoppingBag size={20} />
              {cartItemsCount > 0 && <span className="navbar-cart-badge">{cartItemsCount}</span>}
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="navbar-mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="navbar-mobile-menu md:hidden">
            <div className="navbar-mobile-nav">
              {navItems.map(item => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`navbar-mobile-nav-item ${isActiveLink(item.path) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="navbar-mobile-actions">
                <button className="navbar-icon-btn"><Search size={20} /></button>
                <Link to="/signup" className="navbar-icon-btn"><User size={20} /></Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
