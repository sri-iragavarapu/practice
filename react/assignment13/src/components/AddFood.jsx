function AddFood({ foodName, setFoodName, price, setPrice, addFood }) {
   return (
    <div>
        <h2> Add Food Item </h2>
        <input type = "text" placeholder="Food Name" value = {foodName} onChange={(e) => setFoodName(e.target.value)}/>
        <input type = "number" placeholder="Price" value = {price} onChange={(e) => setPrice(e.target.value)}/>
        <button onClick = {addFood}>Add Food</button>
    </div>
   );
}
export default AddFood;