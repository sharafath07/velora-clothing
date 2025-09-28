import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product, className = '' }) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product, product.sizes[0], product.colors[0], 1);
  };

  return (
    <div className={`product-card ${className}`}>
      <Link to={`/product/${product.id}`}>
        <div className="product-card-image-container">
          <img src={product.image} alt={product.name} className="product-card-image" />
          <div className="product-card-overlay" />
          <div className="product-card-actions">
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="product-card-action-btn"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
          </div>
          <div className="product-card-quick-add">
            <button onClick={handleQuickAdd} className="product-card-quick-add-btn">
              <ShoppingCart size={18} />
              <span>Quick Add</span>
            </button>
          </div>
          {product.featured && <div className="product-card-featured-badge">Featured</div>}
        </div>

        <div className="product-card-info">
          <h3 className="product-card-name">{product.name}</h3>
          <p className="product-card-category">{product.category}</p>
          <p className="product-card-price">${product.price}</p>

          <div className="product-card-colors">
            {product.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="product-card-color"
                style={{
                  backgroundColor:
                    color.toLowerCase() === 'white' ? '#ffffff' :
                    color.toLowerCase() === 'black' ? '#000000' :
                    color.toLowerCase() === 'navy' ? '#1e3a8a' :
                    color.toLowerCase() === 'gray' ? '#6b7280' :
                    color.toLowerCase() === 'beige' ? '#d2b48c' :
                    color.toLowerCase() === 'cream' ? '#f5f5dc' :
                    color.toLowerCase() === 'camel' ? '#c19a6b' :
                    color.toLowerCase() === 'burgundy' ? '#800020' :
                    color.toLowerCase() === 'emerald' ? '#50c878' :
                    color.toLowerCase() === 'blush' ? '#e6a5b5' :
                    '#e6a5b5'
                }}
              />
            ))}
            {product.colors.length > 3 && (
              <span className="product-card-colors-more">+{product.colors.length - 3}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
