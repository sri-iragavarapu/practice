import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile({
  completedCount,
}) {
  const user =
    useContext(UserContext);

  return (
    <div className="profile">
      <h2>👤 User Profile</h2>

      <h3>
        Username: { user.username}
      </h3>

      <h3>
        Completed Habits: { completedCount}
      </h3>
    </div>
  );
}

export default Profile;