import React, { useEffect, useState } from "react";
import api from "../services/api";

const HelpRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    api.get("/public/requests").then((res) => setRequests(res.data)).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Help Requests</h2>
      <div className="cards-grid">
        {requests.map(req => (
          <div key={req.id} className="card glass-panel" style={{ padding: "1rem" }}>
            <h3>{req.title} {req.isEmergency ? <span style={{color:"red"}}>(Emergency)</span> : ""}</h3>
            <p><strong>Status:</strong> {req.status}</p>
            <p><strong>Location:</strong> {req.location}</p>
            <p>{req.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HelpRequests;
