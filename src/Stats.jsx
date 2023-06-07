import React, { useEffect, useState } from 'react';

export default function Stats() {
    const [popular, setPopular] = useState("")
    const [scrilla, setScrilla] = useState("")
    const [busy, setBusy] = useState("")

    useEffect(() => {
        fetch('http://localhost:9292/artists_most_popular')
        .then(r => r.json())
        .then(data => setPopular(data))
      }, [])
    const name = popular.split('-')[0]
    const fans = popular.split('-')[1]

    useEffect(() => {
        fetch('http://localhost:9292/artists_highest_paid')
        .then(r => r.json())
        .then(data => setScrilla(data))
      }, [])
    const scrillaName = scrilla.split('-')[0]
    const scrillaFans = scrilla.split('-')[1]

    useEffect(() => {
        fetch('http://localhost:9292/artists_most_events')
        .then(r => r.json())
        .then(data => setBusy(data))
      }, [])


  return (
    <>
    <h2> Artist Stats </h2>
    <div className="stats">
        <h3>Most Popular:</h3>
        <h5>{name}</h5>
        <h5>{fans}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>Highest paid:</h3>
        <h5>{scrillaName}</h5>
        <h5>{scrillaFans}</h5>
    </div>
    <br/>
    <div className="stats">
        <h3>Most Events:</h3>
        <h5>{busy}</h5>
    </div>
    </>
  )
}