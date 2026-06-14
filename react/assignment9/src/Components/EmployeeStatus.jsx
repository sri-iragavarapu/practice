import { useContext, useState } from "react";
import { EmployeeContext } from "./EmployeeContext";
function EmployeeStatus(){
    const {employee} =useContext(EmployeeContext);
    return(
        <div className="card">
            <h2> Employee Status</h2>
            <p> <strong> Name: </strong> {employee.name} </p>
            <p> <strong> Department: </strong> {employee.department}</p>
            <p> <strong> Status: </strong> {employee.status}</p>
        </div>
    );
}
export default EmployeeStatus;