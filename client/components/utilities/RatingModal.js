import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { postUserActivity, putUserActivity } from '../../store/singleActivityStore'
import Modal from 'react-modal'

Modal.setAppElement("#app")

export default function RatingsModal(props){
    const {activity} = props

    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)
    
    const customStyles = {
        content: {
          top: '35%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          width: '60%',
          transform: 'translate(-40%, -10%)',
        },
    };

    function onChange(event){
        if(activity.useractivities.length>0){
            dispatch(putUserActivity(activity.id,event.target.value))
        }else{
            dispatch(postUserActivity(activity.id,event.target.value))
        }
        toggleModal()
    }
    
    function toggleModal() {
        setIsOpen(!isOpen)
    }

    return(
        <div>
             {activity.useractivities ? 
            activity.useractivities.length>0 ? <button type="button" onClick={toggleModal}>Update Rating</button> : <button type="button" onClick={toggleModal}>Complete Activity</button>
            : ""}
            <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="ratings menu" className="mymodal" overlayClassName="myoverlay" closeTimeoutMS={100}>
                <div>
                    <button type="button" className="close-modal"onClick={toggleModal}>x</button>
                </div>
                <h2>Rate Your Activity</h2>
                <form className="ratingStars" onChange={onChange}>
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label htmlFor="star5" title="text">5 stars</label>

                    <input type="radio" id="star4" name="rate" value="4" />
                    <label htmlFor="star4" title="text">4 stars</label>

                    <input type="radio" id="star3" name="rate" value="3" />
                    <label htmlFor="star3" title="text">3 stars</label>

                    <input type="radio" id="star2" name="rate" value="2" />
                    <label htmlFor="star2" title="text">2 stars</label>

                    <input type="radio" id="star1" name="rate" value="1" />
                    <label htmlFor="star1" title="text">1 star</label>
                </form>
            </Modal>
        </div>
    )
}
