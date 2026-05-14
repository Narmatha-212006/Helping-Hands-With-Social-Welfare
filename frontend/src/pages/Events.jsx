import React, { useEffect, useState } from "react";
import api from "../services/api";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get("/public/events").then((res) => setEvents(res.data)).catch(console.error);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Upcoming Events</h2>
      <div className="cards-grid">
        {events.map(ev => (
          <div key={ev.id} className="card glass-panel" style={{ padding: "1rem" }}>
            <h3>{ev.title}</h3>
            <p><strong>Date:</strong> {ev.eventDate}</p>
            <p><strong>Location:</strong> {ev.location}</p>
            <p>{ev.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Events;
