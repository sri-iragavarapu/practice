import { useState, useEffect } from "react";

function useFetchData() {
  const [tableData, setTableData] = useState([]);
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const employeeResponse = await fetch("/employees.json");
      const employeeData = await employeeResponse.json();

      const profileResponse = await fetch("/profiles.json");
      const profileData = await profileResponse.json();

      setTableData(employeeData);
      setCardData(profileData);
    };

    fetchData();
  }, []);

  return { tableData, cardData };
}

export default useFetchData;