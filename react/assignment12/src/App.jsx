import React, { useState, useMemo, useCallback } from "react";

function App() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // Add product to product list
  const addProduct = useCallback(() => {
    if (!productName || !productPrice) return;

    const newProduct = {
      id: Date.now(),
      name: productName,
      price: Number(productPrice),
    };

    setProducts((prev) => [...prev, newProduct]);
    setProductName("");
    setProductPrice("");
  }, [productName, productPrice]);

  // Add product to cart
  const addToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback((id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // Calculate total only when cart changes
  const totalPrice = useMemo(() => {
    console.log("Calculating Total...");
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Add Product</h2>

      <input
        type="text"
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Price"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      <h2>Product List</h2>

      {products.map((product) => (
        <div key={product.id}>
          {product.name} - ₹{product.price}
          <button onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}

      <hr />

      <h2>Cart</h2>

      {cart.map((item) => (
        <div key={item.id}>
          {item.name} - ₹{item.price}
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default App;