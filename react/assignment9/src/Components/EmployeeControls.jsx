import {useContext} from "react";
import { EmployeeContext } from "./EmployeeContext";
function EmployeeControls(){
    const {employee, setEmployee} = useContext(EmployeeContext);
    const makeActive = () => {
        setEmployee({
            ...employee, 
            status:"Active",
        });
    };
    const makeInactive = () => {
        setEmployee({
            ...employee,
            status:"Inactive"
        });
    };
    return (
    <div className="card">
        <h2> Employee Controls</h2>
        <button onClick={makeActive}> Active </button>
        <button onClick={makeInactive}> Inactive </button>
    </div>
    );
}
export default EmployeeControls;