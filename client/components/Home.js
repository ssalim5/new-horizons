import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeTopFiveAct,reverseHomeAct,reverseHomeRec,_sortRec,_sortUserActivities } from '../store'
import { Link } from 'react-router-dom'
import MappedActivity from './utilities/MappedActivity'
import {Button,Pagination} from 'react-bootstrap'


export default function Home(){

  const myActivities = useSelector((state)=> state.userActivities)
  const myRecommendations = useSelector((state)=> state.recommended.slice(0,15))
  const actStart = useSelector((state)=> state.utilities.fiveAct)
  const recStart = useSelector((state)=> state.utilities.fiveRec)
  const actSortDirection = useSelector((state)=>state.utilities.homeSortAct)
  const recSortDirection = useSelector((state)=>state.utilities.homeSortRec)
  
  const dispatch = useDispatch()
  
  function changeFive(destination,num){
      dispatch(changeTopFiveAct(num,destination))
  }

  function createPagination(arrLength,starting,arrType){
    let active=(starting/5)+1
    let arr = []
    for(let number = 1; number<=((arrLength+4)/5); number++){
      arr.push(
        <Pagination.Item key={number} active={number === active} onClick={(()=>{changeFive(arrType,(number-1)*5)})}>
          {number}
        </Pagination.Item>,
      );
    }
    return arr
  }

  function reverseSort(location){
    if(location==="rec"){
      dispatch(_sortRec({sortOn:"score",sortDirection:!recSortDirection}))
      dispatch(reverseHomeRec(!recSortDirection))
    }
    else if(location==="act"){
      dispatch(_sortUserActivities({sortOn:"score",sortDirection:!actSortDirection}))
      dispatch(reverseHomeAct(!actSortDirection))
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
          <h2>Recommendations</h2>
          <a> </a>
          <div className="topFive-nav">
            <Pagination>
              <Pagination.Prev disabled={recStart<=0} onClick={(()=>{changeFive("fiveRec",Number(recStart)-5)})}/>
              {createPagination(myRecommendations.length,recStart,"fiveRec")}
              <Pagination.Next disabled={recStart+5>=myRecommendations.length} onClick={(()=>{changeFive("fiveRec",Number(recStart)+5)})}/>
            </Pagination>
            {/* <button className ="clickable" type="button" onClick={()=>reverseSort("rec")}>reverse</button> */}
          </div>
          <MappedActivity data={myRecommendations.slice(recStart,recStart+5)}/>
        </div>
        
        <div id="topFive-activities" className="module">
          <h2>My Activities</h2>
          <Link to ={"/activities"} className="clickable">See All Activities</Link>
          <div className="topFive-nav">
          <Pagination>
              <Pagination.Prev disabled={actStart<=0} onClick={(()=>{changeFive("fiveAct",Number(actStart)-5)})}/>
              {createPagination(myActivities.length,actStart,"fiveAct")}
              <Pagination.Next disabled={actStart+5>=myActivities.length} onClick={(()=>{changeFive("fiveAct",Number(actStart)+5)})}/>
            </Pagination>
            {/* <button className="clickable" type="button" onClick={()=>reverseSort("act")}>reverse</button> */}
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
