import React, { useState, useEffect } from 'react';
/* import React from 'react'; */
import "./NextRace.unit.css"

const NextRaceUnit = () => {
        const [nextRace, setNextRace] = useState({
        "season": "",
        "raceRound": "",
        "raceName": "",
        "raceDate": "",
        "raceTime": "",
        "circuit": "",
        "city": "",
        "country": "",
        "raceWiki":""
        })

    useEffect( () => {
        fetch('https://ergast.com/api/f1/2020/next.json')
        .then((response) => {
        /* console.log(response.json()) */
            return response.json();
        })
        .then((data) => {
        console.log(data.MRData.RaceTable.Races[0].raceName);
        console.log(data.MRData.RaceTable)
        setNextRace({
            "season": data.MRData.RaceTable.season,
            "raceRound": data.MRData.RaceTable.round,
            "raceName": data.MRData.RaceTable.Races[0].raceName,
            "raceDate": data.MRData.RaceTable.Races[0].date,
            "raceTime": data.MRData.RaceTable.Races[0].time,
            "circuit": data.MRData.RaceTable.Races[0].Circuit.circuitName,
            "city": data.MRData.RaceTable.Races[0].Circuit.Location.locality,
            "country": data.MRData.RaceTable.Races[0].Circuit.Location.country,
            "raceWiki":data.MRData.RaceTable.Races[0].url
            })
        });

    },[])

    return(
        <div className="nextrace-unit">
            <div className="nextrace-box">
                <div className="race-date">
                    <p>{nextRace.season}</p>
                    <p>{`RACE: ${nextRace.raceRound} `}</p>
                </div>
            </div>
            <div className="nextrace-box">
                <div className="race-date">
                    <p>{nextRace.raceName}</p>
                    <p>{nextRace.raceDate}</p>
                </div>
            </div>
            <div className="nextrace-box">
                <div className="race-date">
                    <p>{nextRace.country}</p>
                    <p>{nextRace.city}</p>  
                </div>
            </div>
        </div>
    )
}

export default NextRaceUnit;
