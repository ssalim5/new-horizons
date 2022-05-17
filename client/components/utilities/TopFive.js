import React, {useEffect, useState} from 'react'
import MappedActivity from "./MappedActivity";



export default function topFive(props){
    const {data}=props
    const [myTopFive,setMyTopFive]=useState([])
    useEffect(()=>{
        setMyTopFive(data.slice(0,5))
    },[data])

    if(!myTopFive){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div className="topFive">
            <div className="topFive-nav">
                <button type="button">prev</button>
                <button type="button">next</button>
                {myTopFive.map((activity)=>{
                    return(
                        <div key={activity.id} className="topFive-option">

                              <h3>{activity.name}</h3>
                            
                        </div>
                    )
                })}
            </div>
            <div className="topfive-info">

            </div>
          
        </div>
    )
}