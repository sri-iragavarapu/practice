import React from "react";
import Card from "./Card.jsx";
function Section() {
    const employees = [
        {
            id:1, 
            image:"https://th.bing.com/th/id/OIP.ItYx8qJm40vZsgJu8xaJJwHaHa?w=165&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
            name: "Sri",
            role: "Frontend Developer",
            phone: "8473956284",
            branch: "Hyderabad"
        },
        {
            id:2,
            image:"data:image/webp;base64,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",
            name: "Reshma",
            role: "UI Designer",
            phone: "0915592682",
            branch: "Bangalore"
        }
    ];
return(
    <div style = {{display:"flex", gap:"20px"}}>
        {
            employees.map((employee) => (
                <Card 
                key= {employee.id}
                image= {employee.image}
                name= {employee.name}
                role= {employee.role}
                phone= {employee.phone}
                branch= {employee.branch} />
            ))}
    </div>
);
}
export default Section;
