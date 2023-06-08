import React, { useEffect, useState } from 'react';

export default function Stats() {
    const [popular, setPopular] = useState("")
    const [scrilla, setScrilla] = useState("")
    const [busy, setBusy] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/artists_most_popular')
        .then(r => r.json())
        .then(data => setPopular(data.name))  
      }, [])
   
    useEffect(() => {
        fetch('http://localhost:9292/artists_highest_paid')
        .then(r => r.json())
        .then(data => setScrilla(data.name))
      }, [])
   
    useEffect(() => {
        fetch('http://localhost:9292/artists_most_events')
        .then(r => r.json())
        .then(data => setBusy(data.name))
      }, [])
      


  return (
    <>
    <h2> Artist Stats </h2>
    <div className="stats">
        <h3>Most Popular:</h3>
        <h5>{popular}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>Highest paid:</h3>
        <h5>{scrilla}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>Most Events:</h3>
        <h5>{busy}</h5>
    </div>
    </>
  )
}