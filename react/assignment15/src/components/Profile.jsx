import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Profile({ goToDashboard }) {

  const { user } = useContext(UserContext);

  return (
  <div className="container">
    <div className="card profile-card">

      <h1>Profile</h1>

      <h2>Student Name</h2>

      <h3>{user}</h3>

      <button
        className="add-btn"
        onClick={goToDashboard}
      >
        Back To Dashboard
      </button>

    </div>
  </div>
);
}

export default Profile;