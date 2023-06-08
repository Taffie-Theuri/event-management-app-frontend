import React, { useState } from 'react';
import EventCard from './EventCard';
import Search from './Search';

function EventList({data, handleDeleteEvent, handleUpdateEvent}) {
  const [dataIndex, setDataIndex] = useState(0)
  const [searchTerm, setSearchTerm] = useState("")


  console.log(data)

const eventList = data
  .filter((event) => {
    const artistName = event.artist_name ?? ""; 
    return artistName.toLowerCase().includes(searchTerm.toLowerCase());
  })
  .slice(dataIndex, dataIndex + 8)
  .map((event) => (
    <EventCard
      key={event.id}
      data={event}
      handleDeleteEvent={handleDeleteEvent}
      handleUpdateEvent={handleUpdateEvent}
    />
  ));

    function handleClickMore() {
      if (data.length > (dataIndex+8)){
      setDataIndex((dataIndex) => (dataIndex + 8));
      console.log(dataIndex)}
      else{

      }
    }

    function handleClickBack() {
      if (dataIndex>1){
      setDataIndex((dataIndex) => (dataIndex - 8) % data.length);}
      else{

      }
    }

  return (
    <>
    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    <div className="event-list">
    {eventList}
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="next-container">
        <button className="next-button" onClick={handleClickBack}>Back</button>
        <button className="next-button" onClick={handleClickMore}>Next</button>
    </div>
  
    </>
  )
}

export default EventList;