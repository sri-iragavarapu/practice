import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";

import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Product from "./pages/Product";
import Login from "./pages/Login";

const About = React.lazy(() =>
  import("./pages/About")
);
import "./App.css";

function App() {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
    <div className="container">

      <nav>
  <Link to="/">Home</Link>

  <br />

  <Link to="/about">About</Link>

  <br />

  <Link to="/contact">Contact</Link>

  <br />

  <Link to="/dashboard/profile">
    Dashboard Profile
  </Link>

  <br />

  <Link to="/product/101">
    Product
  </Link>

  <br />

  <Link to="/protected">
    Protected
  </Link>
</nav>

<Suspense fallback={<h2>Loading...</h2>}>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route path="/dashboard" element={<Dashboard />}>
  <Route path="profile" element={<Profile />} />
  <Route path="settings" element={<Settings />} />
</Route>

<Route
  path="/product/:id"
  element={<Product />}
/>
            <Route
  path="/protected"
  element={
    isLoggedIn
      ? <Dashboard />
      : <Login />
  }
/>

      </Routes>
</Suspense>
</div>
    </BrowserRouter>
  );
}

export default App;