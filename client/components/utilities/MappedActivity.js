import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import {Modal, Button} from 'react-bootstrap'
import SingleActivity from '../SingleActivity'
import Map from '../Map'
import {activityQueries} from './MapsTextSearch'



export default function MappedActivity(props){
    const {data}=props
    const [show, setShow] = useState(false);
    const [active,setActive] = useState({})

    const handleClose = () => {
        setShow(false)};
    const handleShow = (activity) => {
        setActive(activity)
        setShow(true)};

    if(!data){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div className="util-component">
            {data.map((activity)=>{
                return(
                    <div key={activity.id} className={activity.hasOwnProperty("score") ? `rating-${Math.ceil(activity.score)} singleItem clickable`:(activity.hasOwnProperty("useractivities") ? (activity.useractivities.length>0 ? `rating-${activity.useractivities[0].score} singleItem clickable`:"rating-x singleItem clickable") : "loading")}>
                        <div onClick={()=>{handleShow(activity)}}>
                            <img src= {activity.imageUrl} className="singleItem-image"/>
                            <div>
                                <h3>{activity.name}</h3>
                                <p>{activity.hasOwnProperty("score") ? `recommended: ${activity.score}`:(activity.hasOwnProperty("useractivities") ? (activity.useractivities.length>0 ? `rating: ${activity.useractivities[0].score}`:"No rating") : "loading")}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
            <Modal scrollable show={show} onHide={handleClose} animation={false} variant="dark" size="lg" className="singleActivity-modal">
                <Modal.Header closeButton closeVariant="white">
                    <Modal.Title>{active.name}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <SingleActivity activity={active}/>
                </Modal.Body>
            </Modal>
        </div>
    )
}
