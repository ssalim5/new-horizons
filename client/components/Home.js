import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import TopFive from './utilities/TopFive'


export default function Home(){

  const myActivities = useSelector((state)=> state.userActivities)
  const myRecommendations = useSelector((state)=> state.recommended)

  if(!myActivities){
      return(
          <div>Loading</div>
      )
  }
  console.log(myRecommendations)
  return(
      <div className="module home">
        <TopFive data={myActivities}/>
        <TopFive data={myRecommendations}/>
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
