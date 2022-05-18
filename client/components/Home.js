import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTopFiveAct } from '../store/utilities'
import { Link } from 'react-router-dom'
import MappedActivity from './utilities/MappedActivity'


export default function Home(){

  const myActivities = useSelector((state)=> state.userActivities)
  const myRecommendations = useSelector((state)=> state.recommended)
  const actStart = useSelector((state)=> state.utilities.fiveAct)
  const recStart = useSelector((state)=> state.utilities.fiveRec)
  
  const dispatch = useDispatch()
  
  function changeFive(destination,direction,num){
    if(direction==="plus"){
      dispatch(changeTopFiveAct(Number(num)+5,destination))
    }
    else  if(direction==="minus"){
      dispatch(changeTopFiveAct(Number(num)-5,destination))
    }
  }


  if(!myActivities){
      return(
          <div>Loading</div>
      )
  }

  return(
      <div id="home" className="component">

        <div id="topFive-recommendations" className="module">
          <h2>My Recommendations</h2>
          <Link to ={"/recommended"} className="clickable">See All Recommended Activities</Link>
          <div className="topFive-nav">
            <button className={recStart<=0 ? "offButton" : "onButton clickable"} onClick={(()=>{changeFive("fiveRec","minus",recStart)})}>prev</button>
            <button className={recStart+5>=myRecommendations.length ? "offButton" : "onButton clickable"} onClick={(()=>{changeFive("fiveRec","plus",recStart)})}>next</button>
          </div>
          <MappedActivity data={myRecommendations.slice(recStart,recStart+5)}/>
        </div>
        
        <div id="topFive-activities" className="module">
          <h2>My Activities</h2>
          <Link to ={"/activities"} className="clickable">See All Activities</Link>
          <div className="topFive-nav">
            <button className={actStart<=0 ? "offButton" : "onButton clickable"} onClick={(()=>{changeFive("fiveAct","minus",actStart)})}>prev</button>
            <button className={actStart+5>=myActivities.length ? "offButton" : "onButton clickable"} onClick={(()=>{changeFive("fiveAct","plus",actStart)})}>next</button>
          </div>
          <MappedActivity data={myActivities.slice(actStart,actStart+5)}/>
        </div>

      </div>
  )
}





// import React from 'react'
// import {connect} from 'react-redux'

// /**
//  * COMPONENT
//  */
// export const Home = props => {
//   const {username} = props

//   return (
//     <div>
//       <h3>Welcome {username} to New Horizons</h3>
//       <img src= "https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/best-tips-for-taking-horizon-photos.jpg" />
//     </div>
//   )
// }

// /**
//  * CONTAINER
//  */
// const mapState = state => {
//   return {
//     username: state.auth.username
//   }
// }

// export default connect(mapState)(Home)
