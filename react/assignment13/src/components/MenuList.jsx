function MenuList ({menu, addToCart}) {
    return (
        <div>
            <h2> Menu </h2>
            {menu.map((item) => (
                <div key = {item.id}>
                    <p> {item.name} - ₹{item.price} </p>
                    <button onClick={() => addToCart(item)}> Add To Cart </button>
                    </div>
            ))}
        </div>
    );
}
export default MenuList;