import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, Headphones } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-gray-50 to-primary-light">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920")',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        
        <div className="relative text-center text-white px-4 animate-fade-in">
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            Velora
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-2xl mx-auto">
            Where elegance meets sophistication. Discover our curated collection of luxury clothing.
          </p>
          <Link to="/shop">
            <Button size="lg" className="text-lg px-8 py-4">
              Shop Collection
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="font-serif text-4xl font-bold text-gray-900 mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of luxury pieces that define contemporary elegance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                className="animate-slide-up"
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/shop">
              <Button variant="outline" size="lg">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-serif text-4xl font-bold text-gray-900 mb-6">
                The Velora Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded on the principle that luxury should be accessible to the modern woman, 
                Velora represents the perfect fusion of timeless elegance and contemporary design. 
                Our carefully curated collections celebrate femininity while empowering confidence.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Each piece is thoughtfully selected from premium materials and crafted with 
                meticulous attention to detail, ensuring that every woman feels extraordinary 
                in her Velora ensemble.
              </p>
              <Link to="/about">
                <Button variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div className="animate-slide-up">
              <img
                src="https://images.pexels.com/photos/1488327/pexels-photo-1488327.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Velora Story"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-slide-up">
              <div className="bg-primary-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Truck className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">
                Complimentary shipping on all orders over $200
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-primary-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                Your payment information is always protected
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-primary-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">
                Carefully curated luxury pieces that last
              </p>
            </div>
            <div className="text-center animate-slide-up">
              <div className="bg-primary-light rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Headphones className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">
                Dedicated customer service whenever you need us
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;