import { useState, useEffect, useMemo, useCallback } from "react";
import { RestaurantContext } from "./context/RestaurantContext";
import RestaurantInfo from "./components/RestaurantInfo";
import AddFood from "./components/AddFood";
import MenuList from "./components/MenuList";
import Cart from "./components/Cart";
function App(){
  const[ foodName, setFoodName] = useState("");
  const[ price, setPrice] = useState("");
  const[menu, setMenu] = useState([]);
  const[cart, setCart] = useState([]);
  const [ restaurantName] = useState("Sri Foods");
  const[status] = useState("Open");
  useEffect(() => {
  setMenu([
    { id:1, name: "Pizza", price:200 },
    { id:2, name: "Burger", price:100 }
  ]);
}, []);
const addFood = () => {
  if(!foodName || !price) return;
  const newFood = {
    id:Date.now(),
    name:foodName,
    price: Number(price),
  };
  setMenu([...menu, newFood]);
  setFoodName("");
  setPrice("");
};
const addToCart = useCallback((item) => {
  setCart((prevCart) => [...prevCart, item]);
}, []);
const removeFromCart = useCallback((index) => {
  setCart((prevCart) => prevCart.filter((_, i) => i !== index));
}, []);
const totalAmount = useMemo(() => {
  return cart.reduce(
    (total, item) => total + item.price, 0
  );
}, [cart]);
return (
  <RestaurantContext.Provider
  value = {{
    restaurantName, status
  }}> 
  <div>
    <h1> Online Food Ordering Dashboard </h1>
    <RestaurantInfo/>
    <AddFood
    foodName = {foodName}
    setFoodName = {setFoodName}
    price = {price}
    setPrice = {setPrice}
    addFood = {addFood}/>
    <MenuList
    menu = {menu}
    addToCart={addToCart}/>
    <Cart 
    cart = {cart}
    removeFromCart = {removeFromCart}
    totalAmount = {totalAmount}/>
  </div>
  </RestaurantContext.Provider>
);
}
export default App;