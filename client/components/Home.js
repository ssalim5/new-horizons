import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const {username} = props

  return (
    <div>
      <h3>Welcome {username} to New Horizons</h3>
      <img src= "https://picturecorrect-wpengine.netdna-ssl.com/wp-content/uploads/2017/02/best-tips-for-taking-horizon-photos.jpg" />
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    username: state.auth.username
  }
}

export default connect(mapState)(Home)
