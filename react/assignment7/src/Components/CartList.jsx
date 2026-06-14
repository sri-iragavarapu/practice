import React, { useState, useEffect } from "react";

function CartList() {
  const [cart, setCart] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    fetch("/List.json")
      .then((res) => res.json())
      .then((data) => {
        setPro(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div>
      <h1>Cart List</h1>

      <div className="products">
        {pro.map((item) => (
          <div className="card" key={item.id}>
            <h2>{item.name}</h2>
            <p>Price: ₹{item.price}</p>

            <button onClick={() => setCart([...cart, item])}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <h1>Cart</h1>

      <h2>Total Items: {cart.length}</h2>
      <h2>Total Price: ₹{totalPrice}</h2>

      <div className="products">
        {cart.length === 0 ? (
          <h3>Cart is Empty</h3>
        ) : (
          cart.map((item, index) => (
            <div className="card" key={index}>
              <h2>{item.name}</h2>
              <p>Price: ₹{item.price}</p>

              <button
                onClick={() =>
                  setCart(cart.filter((_, i) => i !== index))
                }
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default CartList;