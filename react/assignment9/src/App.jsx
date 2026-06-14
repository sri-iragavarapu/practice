import "./App.css";
import EmployeeDetails from "./Components/EmployeeDetails";
import EmployeeStatus from "./Components/EmployeeStatus";
import EmployeeControls from "./Components/EmployeeControls";
import { EmployeeProvider} from "./Components/EmployeeContext";
function App(){
  return (
    <EmployeeProvider>
      <div className="container">
        <h1>Employee Dashboard</h1>
        <EmployeeDetails/>
        <EmployeeStatus/>
        <EmployeeControls/>
      </div>
    </EmployeeProvider>
  );
}
export default App;