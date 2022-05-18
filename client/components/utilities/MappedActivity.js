import React from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

Modal.setAppElement("#app")

export default function MappedActivity (props) {
    let {activities} = props

    return(
        <div className="util-component">
            {activities.map((activity)=>{
                return(
                    <div key={activity.id} className={activity.useractivities.length>0 ? `rating-${activity.useractivities[0].score} singleItem clickable`:"singleItem clickable"}>
                        <Link to ={`/activities/${activity.id}`}>
                            <img src= {activity.imageUrl} className="singleItem-image"/>
                            <div>
                                <h3>{activity.name}</h3>
                                <p>test</p>
                            </div>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
    
    // return(
    //     <div key={activity.id} className={activity.useractivities ? 
    //         (activity.useractivities.length>0 ? `rating-${activity.useractivities[0].score} singleItem clickable`:"rating-x singleItem clickable") 
    //     : "singleItem clickable"}>
    //         <Link to ={`/activities/${activity.id}`}>
    //             <img src= {activity.imageUrl} className="singleItem-image"/>
    //             {/* <div> */}
    //                 <h3>{activity.name}</h3>
    //                 {/* <p>rating: {activity.useractivities ? (activity.useractivities.length>0 ? activity.useractivities[0].score:"n/a") : "loading"}</p> */}
    //             {/* </div> */}
    //         </Link>
    //     </div>
    // )
}