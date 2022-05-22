import React, {useState,useEffect} from "react";
import { addChat, addUser, fetchChats, sendMessage } from "../store/chatStore";
import {connect} from 'react-redux';
import { fetchFriends } from "../store/friendsStore";
import { Chat } from "./Chat";

export const ChatList = (props) =>{
    useEffect(() => {
        props.fetchInitialMessages()
        console.log("Only on initial render",props.chats)
      },[]);
      
    //handles adding new chat and adding users to a chat
    const handleCreateChat = (event)=>{
      event.preventDefault();
      props.addChat();
    }
    const handleAddUser =(event,user,chat)=>{
      console.log(event,user,chat)
      event.preventDefault();
      props.addUser(user,chat)
    }


    const [activeChatIndex,setActiveChatIndex] = useState(0)
    const handleSetChat = (event,chatId)=>{
      event.preventDefault();
      console.log(chatId)
      setActiveChatIndex(chatId)
    }

    const [messageText,setMessageText] = useState("")
    const handleChangeMessage = (event)=>{
      setMessageText(event.target.value)
    }
    const handleSendMessage = (event)=> {
      event.preventDefault()
      console.log("Submitting",messageText)
      props.sendMessage({content:messageText,chatId:props.chats[activeChatIndex].id})
      setMessageText("")
      event.target.focus()
    }
    return(
      <div className="messaging">
        {/* sidebar */}
        <div id="messages-sidebar" className="sidebar">
          <div className="create-chat">Start new Chat
            <form onSubmit={handleCreateChat}>
              <button type="submit" className="clickable" >Create Chat</button>
            </form>
          </div>
          {/* list of chats */}
          <div id="chat-list">
          {props.chats? props.chats.map((chat,ind)=>{
            return(
            <div className="chat-name clickable" onClick={(event)=>handleSetChat(event,ind)}>
              {chat.users.map((user)=>{ 
              return(
                user.username + ", "
              )})}
            </div>
            )})
            :""}
          </div>
        </div>
            {/* loaded chat */}
        <div className="messages-main">
            <form onSubmit={(event)=>handleAddUser(event,{id:20},{id:props.chats[activeChatIndex].id})}>
              {/* input friend search here */}
              <button type="submit" className="clickable" >Add User</button>
            </form>
          <div className="active-chat">
            {props.chats[activeChatIndex]?<Chat chat={props.chats[activeChatIndex]}/>:""}
          </div>
          <div className="new-message">
              {/* new message in loaded chat */}
              <form onSubmit={handleSendMessage}>
                <input type='text' value={messageText} onChange={handleChangeMessage}></input>
                <button className="clickable" type="submit">SendMessage</button>
              </form>
          </div>
        </div>
      </div>
    )
}

const mapStateToProps = (state) =>({
    chats:state.chats,
    friends:state.friends
  })
  
  const mapDispatchToProps = (dispatch) =>({
    fetchInitialMessages: ()=>dispatch(fetchChats()),
    addChat: ()=>dispatch(addChat()),
    addUser: (user,chat)=>dispatch(addUser(user,chat)),
    sendMessage: (message)=>dispatch(sendMessage(message)),
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(ChatList)