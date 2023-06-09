import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function EventForm({ addEvent }) {
  //Setting use states for the form
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [venue, setVenue] = useState("");
  const [venueData, setVenueData] = useState([]);
  const [price, setPrice] = useState("");
  const [attendees, setAttendees] = useState(""); //Number of people attending
  const [eventType, setEventType] = useState("");
  const [artistData, setArtistData] = useState([]);
  const [artist, setArtist] = useState("");

  let navigate = useNavigate(); //hook that helps to go to the specific URL, forward or backward pages

  useEffect(() => {
    fetch(`http://localhost:9292/venues`)
      .then((r) => r.json())
      .then((data) => {
        setVenueData(data);
      });
  }, []);

 const venueOptions = venueData.map(({ id, name }) => (
   <option key={id} value={id}>
     {name}
   </option>
 ));


  function handleVenueSelect(e) {
    setVenue(e.target.value);
  }

  useEffect(() => {
    fetch(`http://localhost:9292/artists`)
      .then((r) => r.json())
      .then((data) => setArtistData(data));
  }, []);

  const artistOptions = artistData.map(({ id, name }) => (
    <option key={id} value={id}>
      {name}
    </option>
  ));

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleArtistSelect(e) {
    setArtist(e.target.value);
  }

  //function to set the date
  function handleDateChange(e) {
    setDate(e.target.value);
  }
  //function to set price
  function handlePriceChange(e) {
    setPrice(e.target.value);
  }
  //function to set Attendees
  function handleAttendeesChange(e) {
    setAttendees(e.target.value);
  }
  //function to set event type
  function handleEventTypeChange(e) {
    setEventType(e.target.value);
  }

  //Event Form
  function handleSubmit(e) {
    e.preventDefault();

     if (!name) {
       alert("Please enter an event name.");
       return;
     }

      const newEventObj = {
        name: name,
        venue_id: venue,
        date: date,
        price: price,
        event_type: eventType,
        attendees: attendees,
        artist_id: artist,
      };

    fetch("http://localhost:9292/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEventObj),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then((data) => {
        console.log(data);
        navigate("/", { replace: true });
      });
    
    setName("");
    setAttendees("");
    setEventType("");
    setPrice("");
    setDate("");
    
  }

  return (
    <>
      <br />
      <h2>Add an Event</h2>
      <br />
      <form onSubmit={handleSubmit} className="form">

        <label className="input-label" htmlFor="name">
          Name:
        </label>
        <input
          name="name"
          type="text"
          placeholder="Event name..."
          value={name}
          onChange={handleNameChange}
          className="form-input"
          required 
        ></input>
        <br />
        <br />

        <label className="input-label" htmlFor="venue-data">
          Venues:{" "}
        </label>
        <br />
        <select id="venue-data" onChange={handleVenueSelect} required>
          {venueOptions}
        </select>
        <br />
        <br />

        <label className="input-label" htmlFor="artist-data">
          Artists:{" "}
        </label>
        <br />
        <select id="artist-data" onChange={handleArtistSelect} value={artist} required>
          {artistOptions}
        </select>
        <br />
        <br />

        <label className="input-label" htmlFor="attendees">
          Attendees:
        </label>
        <input
          name="attendees"
          type="number"
          placeholder="Amount of people attending..."
          value={attendees}
          onChange={handleAttendeesChange}
          className="form-input"
          required
        ></input>
        <br />
        <br />

        <label className="input-label" htmlFor="event-type">
          Type of Event:
        </label>
        <input
          name="event-type"
          type="string"
          placeholder="Type of event..."
          value={eventType}
          onChange={handleEventTypeChange}
          className="form-input"
          required
        ></input>
        <br />
        <br />

        <label className="input-label" htmlFor="price">
          Ticket Price:
        </label>
        <input
          name="price"
          type="number"
          placeholder="Ticket price..."
          value={price}
          onChange={handlePriceChange}
          className="form-input"
          required
        ></input>
        <br />
        <br />

        <label className="input-label" htmlFor="date">
          Date:
        </label>
        <input
          name="date"
          type="date"
          placeholder="Event date..."
          value={date}
          onChange={handleDateChange}
          className="form-input"
          required
        ></input>
        <br />
        <br />

        <button className="form-input" type="submit">
          Create Event
        </button>
      </form>
    </>
  );
}