import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
// import { connect } from "react-redux";
import { changeSortAct } from "../store";
import { fetchActivities, _sortActivities} from "../store/allActivitiesStore";
import MappedActivity from "./utilities/MappedActivity";



export default function AllActivities(){
  const dispatch = useDispatch()
  const [input, setInput] = useState('')
  const activities = useSelector((state) => state.activities )
  const sorting = useSelector((state)=>state.utilities.sortAct)
  useEffect( () => {
    dispatch(fetchActivities(input,sorting))
  }, [input])
  let selected = sorting
  
  function changeSort(event){
    event.preventDefault()
    const values = event.target.value.split('-')
    let sort = {
      sortOn:values[0],
      sortDirection:values[1]
    }
    dispatch(changeSortAct(sort))
    dispatch(_sortActivities(sort))
  }
  
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
        <form onChange={changeSort} defaultValue="name-forward">
            <input type="radio" id="a-z" name="sort" value={"name-forward"}/>
            <label htmlFor="a-z">a-z</label><br/>
            <input type="radio" id="z-a" name="sort" value={"name-reverse"}/>
            <label htmlFor="z-a">z-a</label><br/>
            <input type="radio" id="rating-0-5" name="sort" value={"score-forward"}/>
            <label htmlFor="z-a">{"rating 0-5"}</label><br/>
            <input type="radio" id="rating-5-0" name="sort" value={"score-reverse"}/>
            <label htmlFor="z-a">{"rating 5-0"}</label><br/>
            <input type="radio" id="z-a" name="sort" value={"updatedAt-forward"}/>
            <label htmlFor="z-a">{"completion date ->"}</label><br/>
            <input type="radio" id="z-a" name="sort" value={"updatedAt-reverse"}/>
            <label htmlFor="z-a">{"completion date <-"}</label><br/>
        </form>
      </div>
      <MappedActivity data={activities}/>
    </div>
  )
}


// const mapState = (state) => {
//   return {
//     activities: state.activities
//   };
// };

// const mapDispatch = (dispatch, { history }) => {
//   return {
//     fetchActivities: (sort) => dispatch(fetchActivities()),
//   };
// };

// export default connect()(AllActivities);
