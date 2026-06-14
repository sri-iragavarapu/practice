import React, { useState } from "react";

function NetflixDashboard() {
  const [plan, setPlan] = useState("Basic");
  const [price, setPrice] = useState(199);
  const [status, setStatus] = useState("Active");

  const upgradePlan = () => {
    if (plan === "Basic") {
      setPlan("Standard");
      setPrice(499);
    } else if (plan === "Standard") {
      setPlan("Premium");
      setPrice(649);
    }
  };

  const pauseSubscription = () => {
    setStatus("Paused");
  };

  const resumeSubscription = () => {
    setStatus("Active");
  };

  return (
    <div className="container">
      <h1>Netflix Subscription Dashboard</h1>

      <p><b>Plan: </b>{plan}</p>
      <p><b>Price: </b>₹{price}/month</p>
      <p><b>Status: </b>{status}</p>

      <button onClick={upgradePlan}>Upgrade Plan</button>
      <button onClick={pauseSubscription}>Pause Subscription</button>
      <button onClick={resumeSubscription}>Resume Subscription</button>

      {status === "Paused" ? (
        <p>❌ Subscription Paused</p>
      ) : (
        <p>✅ Enjoy your shows!</p>
      )}

      {plan === "Premium" && <h2>⭐ Ultra HD Enabled</h2>}
    </div>
  );
}

export default NetflixDashboard;