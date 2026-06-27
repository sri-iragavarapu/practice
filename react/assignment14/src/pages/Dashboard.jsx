import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div className="page">
      <h1>Dashboard</h1>

      <Link to="profile">Profile</Link>

      <br />

      <Link to="settings">Settings</Link>

      <hr />

      <Outlet />
    </div>
  );
}

export default Dashboard;