"use client"
import React from 'react'

import { co2 } from "@tgwf/co2";
import { averageIntensity, marginalIntensity, hosting } from '@tgwf/co2';


const Greenboard = () => {
    const { data } = averageIntensity;
    const mdata = marginalIntensity.data;
    
    const MNGA = mdata.NGA;
    console.log({ MNGA })
    
    const swdmV4 = new co2({ model: "swd", version: 4 });
    const bytes = 1000000000;
    
    const estimate = swdmV4.perByte(bytes);
    console.log('est is', estimate)
    
    
    const { NGA } = data;
    console.log({ NGA })

    hosting("google.com").then((result) => {
        console.log('greencheck is', result);
      });

    // console.log('the green status for google is', gcheck)

  return (
    <div className="px-auto pt-5 align-items-center d-flex">
        <div className=" border rounded py-5 flex-column container-fluid bg-dark">
            <h1>Greenboard: CO2 Dashboard</h1>
            <h2>Did you know?</h2>
            <div>The marginal grid Intensity for CO2 emmission for the internet in Nigeria is {MNGA} grams of CO2 per KiloWatt-Hour</div>
            <div>The average grid Intensity for CO2 emmission for the internet in Nigeria is {NGA} grams of CO2 per KiloWatt-Hour</div>
            <div>The average CO2 emmission per gigabyte transmitted over the internet in Nigeria is {estimate}</div>
            
        </div>
    </div>
  )
}

export default Greenboard