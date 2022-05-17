import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import { VictoryPie, VictoryTheme, VictoryStack, VictoryLabel, VictoryChart, VictoryAxis, VictoryBar} from 'victory';
import MappedActivity from "./utilities/MappedActivity";

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

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
    console.log("Act", activities)
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
      <div>
         <div> Category of Activities</div>
<VictoryPie
  colorScale={["tomato", "yellow", "navy", "grey", "green"]}
  data={[
    { x: "Creative", y: totalCreative },
    { x: "Athletic", y: totalAthletic },
    { x: "Adventurous", y: totalAdventurous },
    { x: "Social", y: totalSocial },
    { x: "Relaxing", y: totalRelaxing }
  ]}
/>
      <div> Exertion Level of Activities</div>
<VictoryPie
  colorScale={["tomato", "cyan", "navy" ]}
  data={[
    { x: "Low", y: low },
    { x: "Medium", y: medium },
    { x: "High", y: high },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
/>
<div> Location of Activities</div>
<VictoryPie
  colorScale={["yellow", "black" ]}
  data={[
    { x: "Inside", y: inside },
    { x: "Outside", y: outside },
    // { x: "Relaxing", y: 55 },
    // { x: "Entertaining", y: 55 }
  ]}
/>


<div>Activity Venue</div>
        <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 100 }}
>

{/* </VictoryChart> */}
        <VictoryBar
          data={[{x: "INSIDE", y:inside},
            {x: "OUTSIDE", y:outside}]}
          // // x= "Inside"
          // y= "NUMBER"
        />
      </VictoryChart>
      </div>
    )}}


    const mapState = (state) => {
      return {
        activities: state.activities
      };
    };

    const mapDispatch = (dispatch, { history }) => {
      return {
        fetchActivities: () => dispatch(fetchActivities()),
      };
    };

    export default connect(mapState, mapDispatch)(Graph);
