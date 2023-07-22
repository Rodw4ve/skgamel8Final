// ShopPage.js

import React, { useState } from 'react';
import './ShopPage.css';

const productsData = [
  {
    id: 1,
    name: 'Premium Subscription',
    price: 10.0,
    category: 'subscription',
  },
  {
    id: 2,
    name: 'T-Shirt',
    price: 20.0,
    category: 'merch',
  },
  {
    id: 3,
    name: 'Hoodie',
    price: 30.0,
    category: 'merch',
  },
  {
    id: 4,
    name: 'Dawgz',
    price: 85.0,
    category: 'subscription',
  },
  {
    id: 5,
    name: 'Sticker Pack',
    price: 5.0,
    category: 'merch',
  },
  {
    id: 6,
    name: 'Mug',
    price: 12.0,
    category: 'merch',
  },
  {
    id: 7,
    name: 'Standard Subscription',
    price: 7.0,
    category: 'subscription',
  },
  {
    id: 8,
    name: 'Gaming Gloves',
    price: 200.0,
    category: 'merch',
  },
];


function ShopPage() {
  const [filters, setFilters] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [cartItems, setCartItems] = useState([]);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setFilters([...filters, value]);
    } else {
      setFilters(filters.filter((filter) => filter !== value));
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter((item) => item.id !== product.id));
  };

  const applyFilters = (products) => {
    return filters.length === 0
      ? products
      : products.filter((product) => filters.includes(product.category));
  };

  const sortProducts = (products) => {
    return products.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else if (sortOrder === 'desc') {
        return b.price - a.price;
      }
      return 0;
    });
  };

  const filteredAndSortedProducts = sortProducts(applyFilters(productsData));

  const featuredProduct = {
    id: 5,
    name: 'Special Edition T-Shirt',
    price: 25.0,
    category: 'merch',
  };

  return (
    <div className="shop-page">
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
        <button className="checkout-button" disabled={cartItems.length === 0}>
          Checkout
        </button>
      </div>
      <div className="filter-section">
        <h2>Filter Products</h2>
        <div className="filter-options">
          <label>
            <input
              type="checkbox"
              value="subscription"
              onChange={handleFilterChange}
            />
            Premium Subscription
          </label>
          <label>
            <input
              type="checkbox"
              value="merch"
              onChange={handleFilterChange}
            />
            Merchandise
          </label>
          {}
        </div>
      </div>
      <div className="products-section">
        <div className="sort-section">
          <label htmlFor="sort-order">Sort By:</label>
          <select
            id="sort-order"
            value={sortOrder}
            onChange={handleSortChange}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <div className="product-list">
          {filteredAndSortedProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <div className="special-offers-section">
        <h2>Special Offers</h2>
        <div className="special-offers-list">
          <div className="special-offer-card">
            <h3>50% Off Hoodies</h3>
            <p>Use code HOODIE50 at checkout.</p>
            <button>Shop Now</button>
          </div>
          {}
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
