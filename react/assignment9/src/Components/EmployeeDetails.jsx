import { useContext } from "react";
import {EmployeeContext} from "./EmployeeContext";
function EmployeeDetails(){
    const { employee, setEmployee} = useContext(EmployeeContext);
    return (
        <div className="card">
            <h2> Employee Details </h2>
            <input type="text" placeholder="Enter Name" value={employee.name} onChange={(e) => setEmployee({...employee, name:e.target.value})}/>
            <input type="text" placeholder="Enter Department" value={employee.department} onChange={(e) => setEmployee({...employee, department:e.target.value})}/>
     </div>
    );
}
export default EmployeeDetails;