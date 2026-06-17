function Cart({ cart, removeFromCart, totalAmount}){
    return(
        <div>
            <h2> Cart </h2>
            {cart.map((item, index) => (
                <div key = {index}>
                    <p> {item.name} - ₹{item.price} </p>
                    <button onClick = {() => removeFromCart(index)}> Remove </button>
                    </div>
            ))}
            <h3> Total Amount: ₹{totalAmount}</h3>
        </div>
    );
}
export default Cart;