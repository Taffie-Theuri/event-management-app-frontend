import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <NavLink to="/" className="nav-button">
        My Events
      </NavLink>
      <NavLink to="/stats" className="nav-button">
        Artist Stats
      </NavLink>
      <NavLink to="/create-event" className="nav-button">
        New Event
      </NavLink>
      <NavLink to="/create-venue" className="nav-button">
        New Venue
      </NavLink>
    </div>
  );
}
