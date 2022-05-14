import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {fetchSingleActivity, postUserActivity, putUserActivity} from "../store/singleActivityStore"
import { useParams } from 'react-router-dom'
import Modal from 'react-modal'

Modal.setAppElement("#app")

export default function SingleActivity(){
    const dispatch = useDispatch()
    const params = useParams()
    const [isOpen, setIsOpen] = useState(false)
    const activity = useSelector((state)=> state.singleActivity)
    
    useEffect(()=>{
        dispatch(fetchSingleActivity(params.id))
    },[])
    
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

    if(!activity){
        return(
            <div>Loading</div>
        )
    }
    return(
        <div>
            <div><img src= {activity.imageUrl}/></div>
            <div><h2>ExperienceNeeded: {activity.experienceNeeded}</h2></div>
            <div><h2>ExertionLevel: {activity.exertionLevel}</h2></div>
            <div><h2>Number of People: {activity.numberOfPeople}</h2></div>
            <div><h2>Venue: {activity.venue}</h2></div>
            <div><h2>Time: {activity.time}</h2></div>
            <div><h2>Price: {activity.price}</h2></div>
            <div><h2>Description: {activity.description}</h2></div>
            <div>
                {activity.useractivities ? 
                activity.useractivities.length>0 ? <button type="button" onClick={toggleModal}>Update Rating</button> : <button type="button" onClick={toggleModal}>Complete Activity</button>
                : ""}
            <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="ratings menu" style={customStyles}>
                <button type="button" className="close-modal"onClick={toggleModal}>x</button>
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
        </div>
    )
}











// class SingleActivity extends React.Component{
//     constructor(){
//         super()
//     }
//     componentDidMount(){
//         this.props.fetchSingleActivity(this.props.match.params.id)
//     }

//     render(){
//         const singleActivity = this.props.singleActivity
//         //console.log("ACTIVE", singleActivity.id)
//         if(!singleActivity){
//             return(
//                 <div>Loading</div>
//             )
//         }
//         return (
//                 <div>
//                     <div><img src= {singleActivity.imageUrl}/></div>
//                     <div><h2>ExperienceNeeded: {singleActivity.experienceNeeded}</h2></div>
//                     <div><h2>ExertionLevel: {singleActivity.exertionLevel}</h2></div>
//                     <div><h2>Number of People: {singleActivity.numberOfPeople}</h2></div>
//                     <div><h2>Venue: {singleActivity.venue}</h2></div>
//                     <div><h2>Time: {singleActivity.time}</h2></div>
//                     <div><h2>Price: {singleActivity.price}</h2></div>
//                     <div><h2>Description: {singleActivity.description}</h2></div>
//                     {singleActivity.useractivities ? <RatingsModal activityId={singleActivity.id} /> : ""}
//                 </div>
//         )
//     };
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     singleActivity: state.singleActivity
//   }
// }
// const mapDispatch = (dispatch) =>{
//     return{
//         fetchSingleActivity: (id) => dispatch(fetchSingleActivity(id)),
//     }
// }

// export default connect(mapState, mapDispatch)(SingleActivity)
