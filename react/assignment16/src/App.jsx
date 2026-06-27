import UserTable from "./components/UserTable";
import ProfileCards from "./components/ProfileCards";
import "./App.css";

function App() {
  return (
    <div className="app">
      <UserTable />

      <hr />

      <ProfileCards />
    </div>
  );
}

export default App;