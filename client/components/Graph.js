import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { getUserActivities } from "../store/userActivitiesStore";
import { getFriendActivities } from "../store/friendsActivitiesStore";
import {fetchFriends} from "../store/friendsStore"
// import styled from 'styled-components';
import { VictoryPie, VictoryTheme, VictoryStack, VictoryLabel,
  VictoryChart, VictoryAxis, VictoryBar} from 'victory';
import MappedActivity from "./utilities/MappedActivity";

// const DropDownContainer = styled("div")``;
// const DropDownHeader = styled("div")``;
// const DropDownListContainer = styled("div")``;
// const DropDownList = styled("ul")``;
// const ListItem = styled("li")``;


class Graph extends React.Component {
  constructor() {
    super();
    this.state = {
      Creative: 3,
      Athletic: 3,
      Adventurous: 3,
      Social: 3,
      Relaxing: 3
    }
    this.handleSelect = this.handleSelect.bind(this)
  }
  componentDidMount(){
    this.props.getUserActivities()
    this.props.fetchFriends(this.props.auth.id);
}

handleSelect(event) {
  // this.setState({
  //   searchWord: event.target.value,
  // })
  this.props.getFriendActivities(event.target.value)
  const friendActivities = this.props.friendActivities.activities || []
  const friendCreative = friendActivities.map((activity) => (activity.creative))
  const friendAthletic = friendActivities.map((activity) => (activity.athletic))
  const friendAdventurous = friendActivities.map((activity) => (activity.adventurous))
  const friendRelaxing = friendActivities.map((activity) => (activity.relaxing))
  const friendSocial = friendActivities.map((activity) => (activity.social))
  const totalFriendSocial = friendSocial.reduce((a,b) => a + b, 0)
  const totalFriendRelaxing = friendRelaxing.reduce((a,b) => a + b, 0)
  const totalFriendAdventurous = friendAdventurous.reduce((a,b) => a + b, 0)
  const totalFriendAthletic = friendAthletic.reduce((a,b) => a + b, 0)
  const totalFriendCreative = friendCreative.reduce((a,b) => a + b, 0)
  this.setState({
    Creative: totalFriendCreative,
    Athletic: totalFriendAthletic,
    Adventurous: totalFriendAdventurous,
    Social: totalFriendSocial,
    Relaxing: totalFriendRelaxing
  }),


  console.log("EVENT", event.target.value)

}

// this.props.getFriendActivities(this.props.match.params.id)

  render() {
    const friends = this.props.friends || []
    const activities = this.props.userActivities
    const userAdventurous = this.props.auth.adventurous
    const userCreative = this.props.auth.creative
    const userRelaxing = this.props.auth.relaxing
    const userAthletic = this.props.auth.athletic
    const userSocial = this.props.auth.social

   const array = activities.map((activity) => (activity.exertion))
   let low = 0
   let medium = 0
   let high = 0
   array.forEach(element => {
     if(element === 'LOW') {
     low += 1;
     }
   });

   array.forEach(element => {
    if(element === 'MEDIUM') {
    medium += 1;
    }
  });

  array.forEach(element => {
    if(element === 'HIGH') {
    high += 1;
    }
  });

  const venue = activities.map((activity) => (activity.outside))
  let outside = 0
  venue.forEach(element => {
    if(element === true) {
    outside += 1;
    }
  });
  let inside = venue.length - outside

  const creative = activities.map((activity) => (activity.creative))
  const athletic = activities.map((activity) => (activity.athletic))
  const adventurous = activities.map((activity) => (activity.adventurous))
  const relaxing = activities.map((activity) => (activity.relaxing))
  const social = activities.map((activity) => (activity.social))
  const totalSocial = social.reduce((a,b) => a + b, 0)
  const totalRelaxing = relaxing.reduce((a,b) => a + b, 0)
  const totalAdventurous = adventurous.reduce((a,b) => a + b, 0)
  const totalAthletic = athletic.reduce((a,b) => a + b, 0)
  const totalCreative = creative.reduce((a,b) => a + b, 0)



    return (

      <div className="component">
        <div className='Charts'>
        <div className='categoryCharts'>
        <div className='Chart1'>
         <div className='Title'><h2> Category of Activities</h2></div>
         <div className='ChartInd'>
<VictoryPie
  colorScale={"heatmap"}
  data={[
    { x: "Creative", y: totalCreative },
    { x: "Athletic", y: totalAthletic},
    { x: "Adventurous", y: totalAdventurous },
    { x: "Social", y: totalSocial },
    { x: "Relaxing", y: totalRelaxing }
  ]}
  labelComponent={<VictoryLabel angle={45}/>}
  style={{ labels: { fill: "white"} }}
/>
</div>
</div>
<div className='Chart1'>
<div className='Title'><h2> Friends Categories </h2></div>
<div>
<div>
      {friends.length ? (<select onChange={this.handleSelect} name="selectList" id="selectList">

      ({friends.map((friends) => {
          return (
  <option value={friends.friendId} key={friends.id}>{friends.username}</option>)})})
</select>) : <div>NOTHING </div>}
    </div>
{/* <div><h2> USER PROFILE</h2></div> */}
<div className='ChartInd'>
<VictoryPie
  colorScale={"heatmap"}
  data={[
    { x: "Creative", y: this.state.Creative},
    { x: "Athletic", y: this.state.Athletic},
    { x: "Adventurous", y: this.state.Adventurous},
    { x: "Social", y: this.state.Social },
    { x: "Relaxing", y: this.state.Relaxing}
  ]}
  style={{ labels: { fill: "white"} }}
  labelComponent={<VictoryLabel angle={45}/>}
  // origin={{ y: 250 }}
  // padding={125}

// labelPosition={({ index }) => index
// ? "centroid"
// : "startAngle"
// }
// padding={{ top: 50, bottom: 50 }}
/>
</div>
</div>
</div>
</div>
<div className='activityCharts'>
<div className='Chart1'>
      <div className='Title'><h2> Exertion Level of Activities</h2></div>
      <div className='ChartInd'>
<VictoryPie
  colorScale={"cool"}
  // startAngle={90}
  // endAngle={-90}
  data={[
    { x: "High", y: high },
    { x: "Medium", y: medium },
    { x: "Low", y: low },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
  style={{ labels: { fill: "white"} }}
/>
</div>
</div>
<div className='Chart1'>
<div className='Title'> <h2>Location of Activities</h2></div>
<div className='ChartInd'>
<VictoryPie

  colorScale={"qualitative"}
  // startAngle={90}
  // endAngle={-90}
  data={[
    { x: "Outside", y: outside },
    { x: "Inside", y: inside },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
  style={{ labels: { fill: "white"} }}
  // padding={10}
  // width="50%"
  />
</div>
</div>
</div>

        </div>
        </div>

    )

{/* <div>Activity Venue</div>
        <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 100 }}
> */}

{/* </VictoryChart> */}
        {/* <VictoryBar
          data={[{x: "INSIDE", y:inside},
            {x: "OUTSIDE", y:outside}]}
          // // x= "Inside"
          // y= "NUMBER"
        />
      </VictoryChart> */}
    }}


    const mapState = (state) => {
      return {
        activities: state.activities,
        auth: state.auth,
        userActivities: state.userActivities,
        friendActivities: state.friendActivities,
        friends: state.friends,
      };
    };

    const mapDispatch = (dispatch, { history }) => {
      return {
        fetchActivities: () => dispatch(fetchActivities()),
        getUserActivities: () => dispatch(getUserActivities()),
        fetchFriends: (id) => dispatch(fetchFriends(id)),
        getFriendActivities: (id) => dispatch(getFriendActivities(id))
      };
    };

    export default connect(mapState, mapDispatch)(Graph);
