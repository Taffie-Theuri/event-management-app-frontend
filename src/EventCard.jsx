import React, { useState } from 'react';
import EditEvent from './EditEvent';

function EventCard({data, handleDeleteEvent, handleUpdateEvent}) {
    const [isEditing, setIsEditing] = useState(false);
    const [visible, setVisible] = useState(true)
    const {id, name, date, price, event_type, attendees, artist_name, venue_name, venue_address, venue_capacity, venue_phone_number } = data
   

    function handleDelete(){
      fetch(`http://localhost:9292/events/${id}`, {
        method: 'DELETE',
      })
      .then((r) => r.json())
      .then((deletedEvent) => handleDeleteEvent(deletedEvent))
    }

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    let dateItem = new Date(date).toLocaleDateString('en-US', options);

  return (
    <div className="card">
      {visible ?
        (<div> {isEditing ? (
        <EditEvent
          id={id}
          data={data}
          setIsEditing={setIsEditing}
          handleUpdateEvent={handleUpdateEvent}
        />
      ) : (

        <>

        <div className="delete-edit-buttons">
        <button className="edit-btn" onClick={() => setIsEditing((isEditing) => !isEditing)}>
              <span role="img" aria-label="edit">
                ✏️
              </span>
        </button>
        <button onClick={handleDelete} className="delete-event-btn">X</button>
        <br/>
        <br/>

        </div>
          <h3>{name} {event_type}</h3>
          <h4>{artist_name}</h4>
          <h5>{dateItem}</h5>
          <div className="price">🎟️ ${price}</div>
          <div className="attendees">Attendees: {attendees}</div>
          <br/>
          <h5 className="venue-info" onClick={() => setVisible(!visible)}>Venue Info</h5>
      </>
      )} </div>) : (

        <div className="venue-card">
          <h5 className="venue-info" onClick={() => setVisible(!visible)}>Concert Info</h5>
          <h5>{venue_name}</h5>
          <p className="address">Address: {venue_address}</p>
          <p className="capacity">Capacity: {venue_capacity}</p>
          <p className='phone'>{venue_phone_number}</p>
        </div>
      )}
    </div>
  )
}
export default EventCard;