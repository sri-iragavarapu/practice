import { useState } from "react";
import useFetchData from "../hooks/useFetchData";

function UserTable() {
  const { tableData } = useFetchData();

  const [rows, setRows] = useState(10);

  return (
    <div className="table-container">
      <h2>Employee Table</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>

        <tbody>
          {tableData
            .slice(0, rows)
            .map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>₹{employee.salary}</td>
              </tr>
            ))}
        </tbody>
      </table>

      <button onClick={() => setRows(rows + 10)} disabled={rows >= tableData.length}>
        Add 10 More Rows
      </button>
    </div>
  );
}

export default UserTable;