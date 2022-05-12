import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import Modal from 'react-modal'
import {postUserActivity} from '../store/userActivitiesStore'

Modal.setAppElement("#app")

export default function RatingsModal (props) {
    let {activityId} = props
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false)

    function onChange(event){
        console.log("INPUT: ", activityId,Number(event.target.value))
        dispatch(postUserActivity(activityId,event.target.value))
        toggleModal()
    }

    function toggleModal() {
        setIsOpen(!isOpen)
    }


    return(
        <div>
            <button type="button" onClick={toggleModal}>Add Activity</button>

            <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="ratings menu">
                <form onChange={onChange}>
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
                <button type="button" className="close-modal"onClick={toggleModal}>x</button>
                <button type="button" onClick={()=>{console.log(rating)}}>check rating</button>
            </Modal>
            
        </div>
    )
}