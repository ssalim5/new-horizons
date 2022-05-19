import React, {useState,useEffect} from "react";
import { fetchChats } from "../store/messagesStore";
import {connect} from 'react-redux'

export const Messenger = (props) =>{
    useEffect(() => {
        console.log("something's happening")
        props.fetchInitialMessages()
      },[]);
    return(
        <div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    messages:state.messages
  })
  
  const mapDispatchToProps = (dispatch) =>({
    fetchInitialMessages: ()=>dispatch(fetchChats())
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(Messenger)