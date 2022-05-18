import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import { connect } from "react-redux";
import { fetchActivities} from "../store/allActivitiesStore";
import MappedActivity from "./utilities/MappedActivity";


const AllActivities = (props) => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const activities = useSelector((state) => state.activities )
  useEffect( () => {
    dispatch(fetchActivities(input))
  }, [input])
  return(
    <div id="allActivities" className="module">
      <h2>All Activities</h2>
      <div>
        <form className="search-activities">
          <input
            className="search-activities"
            type="search"
            value={input.name}
            onChange={(e) => {
              console.log(input)
              setInput(e.target.value)
            }}
            placeholder="Type to search..."
          />
        </form>
      </div>
      <MappedActivity data={activities}/>
    </div>
  )
}


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

export default connect(mapState, mapDispatch)(AllActivities);
