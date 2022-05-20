import React, {useState,useEffect} from "react";
import { addChat, addUser, fetchChats } from "../store/chatStore";
import {connect} from 'react-redux'
import { Chat } from "./Chat";

export const ChatList = (props) =>{
    useEffect(() => {
        console.log("something's happening")
        props.fetchInitialMessages()
        console.log(props.chats)
      },[]);
    // console.log('chats',props.chats)
    const [activeChatIndex,setActiveChatIndex] = useState(0)
    const handleCreateChat = (event)=>{
      event.preventDefault();
      props.addChat();
      props.addUser({user:{id:20},chat:{id:3}})
    }
    return(
      <div className="messaging">
        {/* sidebar */}
        <div id="messages-sidebar" className="sidebar">
          <div className="create-chat">Start new Chat
            <form onSubmit={handleCreateChat}>
              {/* input friend search here */}
              <button type="submit" >Create Chat</button>
            </form>
          </div>
          {/* list of chats */}
          <div id="chat-list">
          {props.chats? props.chats.map((chat)=>{
            return(
            <div>{chat.id}</div>
            )})
            :""}
            </div>
        </div>
            {/* loaded chat */}
        <div className="messages-main">
          <div className="active-chat">
            {props.chats[activeChatIndex]?<Chat chat={props.chats[activeChatIndex]}/>:""}
          </div>
          <div className="new-message">
              {/* new message in loaded chat */}
              <p>ENTRY BOX</p>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>({
    chats:state.chats
  })
  
  const mapDispatchToProps = (dispatch) =>({
    fetchInitialMessages: ()=>dispatch(fetchChats()),
    addChat: ()=>dispatch(addChat()),
    addUser: (user,chat)=>dispatch(addUser(user,chat))
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(ChatList)