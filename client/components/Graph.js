import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryPie, VictoryTheme } from 'victory';


class Graph extends React.Component {
  render() {
    return (
      <div>
      <div>Activities</div>
<VictoryPie
  colorScale={["tomato", "orange", "gold", "cyan", "navy" ]}
  data={[
    { x: "Creative", y: 35 },
    { x: "Athletic", y: 40 },
    { x: "Logical", y: 55 },
    { x: "Relaxing", y: 55 },
    { x: "Entertaining", y: 55 }
  ]}
/>
      </div>
    )}}


 export default Graph
