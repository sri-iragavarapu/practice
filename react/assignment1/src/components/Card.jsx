import React from "react";
function Card(props){
    return (
        <div style = {{ 
            border: "2px solid black",
            padding: "20px",
            width: "200px",
            textAlign: "center",
            borderRadius: "10px",  
        }}>
        <img src = { props.image } alt= "profile" width="150px" height="150px" style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid black"}}/>
        <h2>{props.name}</h2>
        <p>{props.role}</p>
        <p>{props.phone}</p>
        <p>{props.branch}</p>
        </div>
    );
}
export default Card;