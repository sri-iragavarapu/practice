import { useContext } from "react";
import { RestaurantContext } from "../context/RestaurantContext";
function RestaurantInfo(){
    const { restaurantName, status } = useContext(RestaurantContext);
    return ( 
        <div>
            <h2> {restaurantName} </h2>
            <h3> Delivery Status: {status} </h3>
        </div>
    );
}
export default RestaurantInfo;