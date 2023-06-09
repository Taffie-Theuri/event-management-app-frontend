import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function VenueForm() {
//useStates
  const [venue, setVenue] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [capacity, setCapacity] = useState('');
  let navigate = useNavigate();


function handleVenueChange(e) {
setVenue(e.target.value)
}
function handlePriceChange(e) {
  setPrice(e.target.value)
}

function handleAddressChange(e) {
setAddress(e.target.value)
}

function handlePhoneChange(e) {
setPhone(e.target.value)
}

function handleCapacityChange(e) {
  setCapacity(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault();

  const newVenueObj = {
    name: venue,
    price: price,
    address: address,
    phone_number: phone,
    capacity: capacity,
  };

  fetch("http://localhost:9292/venues", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newVenueObj),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      setTimeout(() => navigate("/create-event", { replace: true }), 1000);
    });
}

  return (
    <>
    <br/>
    <h2>Add a Venue</h2>
    <br/>
    <form onSubmit={handleSubmit} className="form">
    <label className="input-label"  htmlFor="name">Venue Name:</label>
        <input
        name="name"
        type="string"
        placeholder="Venue Name..."
        value={venue}
        onChange={handleVenueChange}
        className="form-input"
        required
        >
        </input>
        <br/>
        <br/>


        <label className="input-label"  htmlFor="price">Price:</label>
        <input
        name="price"
        type="integer"
        placeholder="Price..."
        value={price}
        onChange={handlePriceChange}
        className="form-input"
        required
        >
        </input>
        <br/>
        <br/>


        <label className="input-label"  htmlFor="address">Address:</label>
        <input
        name="address"
        type="string"
        placeholder="Address..."
        value={address}
        onChange={handleAddressChange}
        className="form-input"
        required
        >
        </input>
        <br/>
        <br/>


        <label className="input-label"  htmlFor="phone_number">Phone:</label>
        <input
        name="phone_number"
        type="string"
        placeholder="Phone..."
        value={phone}
        onChange={handlePhoneChange}
        className="form-input"
        required
        >
        </input>
        <br/>
        <br/>


        <label className="input-label"  htmlFor="capacity">Capacity:</label>
        <input
        name="capacity"
        type="number"
        placeholder="Capacity..."
        value={capacity}
        onChange={handleCapacityChange}
        className="form-input"
        required
        >
        </input>
        <br/>
        <br/>

        <button className="form-input" type="submit">Create Venue</button>
        </form>
    </>
  )
}

export default VenueForm