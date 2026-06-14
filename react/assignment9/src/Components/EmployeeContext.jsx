import { createContext, useState } from "react";
export const EmployeeContext = createContext();
export function EmployeeProvider({children}) {
const [employee, setEmployee] = useState({
    name:"",
    department:"",
    status:"Active",
});
return (
    <EmployeeContext.Provider value = {{ employee, setEmployee}}>
        {children}
    </EmployeeContext.Provider>
);
}