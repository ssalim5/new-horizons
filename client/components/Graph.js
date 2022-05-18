import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import { VictoryPie, VictoryTheme, VictoryStack, VictoryLabel, VictoryChart, VictoryAxis, VictoryBar} from 'victory';
import MappedActivity from "./utilities/MappedActivity";



class Graph extends React.Component {
  constructor() {
    super();
    this.state = {
    }
  }
  componentDidMount(){
    this.props.fetchActivities()
}
  render() {
    const activities = this.props.activities
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

  console.log("creative", athletic)

  console.log("Totalcreative", totalAthletic)

    return (
      <div>
        <div className='Charts'>
         <div><h2> Category of Activities</h2></div>
         <div className='Chart1'>
<VictoryPie
  colorScale={["tomato", "yellow", "navy", "grey", "green"]}
  data={[
    { x: "Creative", y: totalCreative },
    { x: "Athletic", y: totalAthletic},
    { x: "Adventurous", y: totalAdventurous },
    { x: "Social", y: totalSocial },
    { x: "Relaxing", y: totalRelaxing }
  ]}
  style={{ labels: { fill: "white"} }}
/>
</div>
<div><h2> USER PROFILE</h2></div>
<div className='Chart1'>
<VictoryPie
  colorScale={"heatmap"}
  data={[
    { x: "Creative", y: userCreative },
    { x: "Athletic", y: userAthletic },
    { x: "Adventurous", y: userAdventurous },
    { x: "Social", y: userSocial },
    { x: "Relaxing", y: userRelaxing}
  ]}
  style={{ labels: { fill: "white"} }}
/>
</div>
</div>
<div className='Charts'>
      <div><h2> Exertion Level of Activities</h2></div>
      <div className='Chart2'>
<VictoryPie
  colorScale={["tomato", "cyan", "navy" ]}
  data={[
    { x: "Low", y: low },
    { x: "Medium", y: medium },
    { x: "High", y: high },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
  style={{ labels: { fill: "white"} }}
/>
</div>
<div> <h2>Location of Activities</h2></div>
<div className='Chart2'>
<VictoryPie
  colorScale={["yellow", "gray" ]}
  data={[
    { x: "Inside", y: inside },
    { x: "Outside", y: outside },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
  style={{ labels: { fill: "white"} }}
  // padding={10}
  // width="50%"
/>
</div>
</div>


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
      </div>
    )}}


    const mapState = (state) => {
      return {
        activities: state.activities,
        auth: state.auth
      };
    };

    const mapDispatch = (dispatch, { history }) => {
      return {
        fetchActivities: () => dispatch(fetchActivities()),
      };
    };

    export default connect(mapState, mapDispatch)(Graph);
