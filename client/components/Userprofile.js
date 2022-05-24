import React, {useRef, useCallback, useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchUser, updateUser } from "../store/SingleUserStore";
import { fetchActivities} from "../store/allActivitiesStore";
import { getUserActivities } from "../store/userActivitiesStore";
import {fetchFriends, deleteFriend} from "../store/friendsStore"
import MappedActivity from "./utilities/MappedActivity";

import Graph from "./Graph"
import AddFriends from "./AddFriends"

import aws from "aws-sdk"
import axios from "axios";
import {Accordion, Image, Button, Offcanvas} from 'react-bootstrap'
import AccordionBody from "react-bootstrap/esm/AccordionBody";

const AWS_ACCESS_KEY_ID="AKIAYQC73EU7UC6KESI5"
const AWS_DEFAULT_REGION="us-east-1"
const AWS_SECRET_ACCESS_KEY="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"
const S3_BUCKET="new-horizons-app-assets"

aws.config.update({
  region: process.env.AWS_DEFAULT_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const UserProfile = (props) => {
  const dispatch = useDispatch()
  const user = useSelector( state => state.user )
  const friends = useSelector( state => state.friends )
  console.log("friends", friends)
  const userActivities = useSelector( state => state.userActivities.reverse() )
  const recent5 = userActivities.slice(0,5)
  const [show, setShow] = useState(false);

  const fileInput = useRef()
  const profilePicture = useRef()

  useEffect( () => {
    //console.log(props)
    //dispatch(fetchActivities())
    dispatch(fetchUser(props.match.params.id))
    dispatch(fetchFriends(props.match.params.id))
    //dispatch(getUserActivities())
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // componentDidMount() {
  //   this.props.fetchUserData(this.props.match.params.id);
  //   this.props.fetchFriends(this.props.match.params.id);
  //   this.props.fetchActivities()
  //   this.props.getUserActivities()
  // }

  const handleSubmit = useCallback( async(e) => {
    e.preventDefault()
    console.log("CLICKED")
    const s3 = new aws.S3()
    const file = fileInput.current.files[0]
    const pictureKey = "photos/profile_picture_" + props.match.params.id + file.name.slice( file.name.indexOf('.') )
    const uploadParams = {
      Bucket: process.env.S3_BUCKET,
      Key: pictureKey,
      Body: file,
      ACL: 'public-read'
    };
    const newUrl = `https://new-horizons-app-assets.s3.us-east-1.amazonaws.com/${pictureKey}`
    console.log(newUrl)
    try {
      const data = await s3.putObject(uploadParams).promise();
      dispatch( updateUser( {...user, imageUrl: newUrl} ) )
      profilePicture.current.src = newUrl
      console.log("Successful Upload", data);
    } catch (err) {
      console.log("Error", err);
    }
  })

  // const user = this.props.userData;
  //   const friends = this.props.friends;
  //   const userActivities = this.props.userActivities.reverse()


  /*
  return(
    <div className="userProfile">
      <div className="userInfo">
        <img>
        <div className="userInfoText">
          <p>username<p/>
          <p>email<p/>
          <button>friends<p/>

        </div>
      </div>
      <Graph /> (remember to import)
    </div>
  )
  */
  return (
      <div>
        <div className="userProfile">
          <div className="userInfo">
            <div className="userInfoImage">
              <Image roundedCircle id="userProfileImage" src={user.imageUrl} ref={profilePicture}/>
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Change Profile Picture</Accordion.Header>
                  <Accordion.Body>
                    <form onSubmit={handleSubmit}>
                      <label>
                        Upload a file:
                        <input type="file" ref={fileInput} accept=".png, .jpeg, .jpg"/>
                      </label>
                      <button type="submit"> Upload New Picture </button>
                    </form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
            <div className="userInfoText">
              <p>username: {user.username}</p>
              <p>email: {user.email}</p>
              <Button className="purple" onClick={handleShow}>Friends</Button>
              <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Friends</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Add Friends</Accordion.Header>
                        <Accordion.Body>
                          <AddFriends data={props.match.params.id}/>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    {friends.map((friend)=>{
                      return (
                      <Link key={friend.id} to={`/usersfriends/${friend.friendId}`} >
                        <div className="friend">{friend.username}</div>
                      </Link>
                      )
                    })}
                </Offcanvas.Body>
              </Offcanvas>
            </div>
        </div>
        <Graph />
      </div>
        {/* <div>
          {user ? (
            <div key={user.id}> */}
              {/* <div className="singleActivity-image"> */}
              {/* <img className="resize" src= {user.imageUrl}/> */}
              {/* </div> */}
              {/* <h2>USER: {user.username}</h2> */}
              {/* <h2>USER EMAIL: {user.email}</h2> */}
              {/* <img id="preview" src={user.imageUrl} ref={profilePicture}/> */}
              {/* <form onSubmit={handleSubmit}>
                <label>
                  Upload a file:
                  <input type="file" ref={fileInput}/>
                </label>
                <button type="submit"> Upload New Picture </button>
              </form>
            <h1>5 MOST RECENT ACTIVITIES:</h1>
            <div id="allActivities">
          {recent5.map((activity) => {
            return(
              <div key={activity.id}>
              <Link to ={`/activities/${activity.id}`}>
              <img src= {activity.imageUrl} className="singleItem-image"/>
              <div>
                  <h3>{activity.name}</h3>
              </div>
          </Link> */}

              {/* // <div key={activity.id} className="activity-x">
              // <h1>{activity.name}</h1>
              // </div> */}
              {/* </div>
            )
          })}
        </div>

           </div>
           )
      : (
        "There is no user data"
      )}
    </div>
    <div className="module">
    <h2><Link to={`/addfriends/${props.match.params.id}`}>Add Friends</Link>
    </h2>
    <h2>Friends List:</h2>
    // <div> {friends.map((friend) => {
    //       return (
    //         <div key={friend.id}>
    //         <Link to={`/usersfriends/${friend.friendId}`} key={friend.id}>
    //         <div className="friend" key={friend.id}>
    //         <h2 className="name">{friend.username}</h2>
    //         </div>
    //         </Link>
    //          <form onSubmit={(ev) => ev.preventDefault()}>
    //            <div className= "remove"></div>
    //          <button
    //          type="submit"
    //            className= "x-button"
    //            onClick={() => dispatch( deleteFriend(friend.id) )}
    //          >
    //            Remove Friend
    //          </button>
    //          </form>
    //            </div>
    //       );
    //     })}
    //     </div>
        </div> */}
    </div>
    )
}

const mapState = (state) => {
  return {
    userData: state.user,
    friends: state.friends,
    activities: state.activities,
    userActivities: state.userActivities
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    fetchUserData: (id) => dispatch(fetchUser(id)),
    updateUserData: (id) => dispatch(updateUser(id)),
    fetchFriends: (id) => dispatch(fetchFriends(id)),
    deleteFriend: (id) => dispatch(deleteFriend(id)),
    fetchActivities: () => dispatch(fetchActivities()),
    getUserActivities: () => dispatch(getUserActivities())
  };
};

export default connect(mapState, mapDispatch)(UserProfile);
