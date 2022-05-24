import React, {useState,useEffect} from "react";
import { addChat, addUser, fetchChats, sendMessage } from "../store/chatStore";
import { fetchUsers } from "../store/allUsersStore";
import {connect} from 'react-redux';
import { Chat } from "./Chat";
import { Offcanvas, Button, OverlayTrigger, Tooltip } from "react-bootstrap";

export const ChatList = (props) =>{
    useEffect(() => {
        props.fetchInitialMessages()
        props.fetchUsers()
      },[]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
      
    //handles adding new chat and adding users to a chat
    const handleCreateChat = (event)=>{
      event.preventDefault();
      props.addChat();
    }

    const [userIdToAdd,setUserIdToAdd] = useState(1)
    const handleChangeUserToAdd = (event)=>{
      event.preventDefault()
      setUserIdToAdd(event.target.value)
    }
    const handleAddUser =(event,user,chat)=>{
      // console.log(user)
      // event.preventDefault();
      props.addUser(user,chat)
    }


    const [activeChatIndex,setActiveChatIndex] = useState(0)
    const handleSetChat = (event,chatId)=>{
      event.preventDefault();
      setActiveChatIndex(chatId)
    }

    const [messageText,setMessageText] = useState("")
    const handleChangeMessage = (event)=>{
      setMessageText(event.target.value)
    }
    const handleSendMessage = (event)=> {
      event.preventDefault()
      props.sendMessage({content:messageText,chatId:props.chats[activeChatIndex].id})
      setMessageText("")
      event.target.focus()
    }
    return(
        <div className="messaging">
          {/* sidebar */}
          <div id="messages-sidebar" className="sidebar">
            <div className="create-chat">
              <form onSubmit={handleCreateChat}>
                <Button type="submit" className="purple" >Create Chat</Button>
              </form>
            </div>
            {/* list of chats */}
            <div id="chat-list">
            {props.chats? props.chats.map((chat,ind)=>{
              return(
              <div key={ind} className="chat-name clickable" onClick={(event)=>handleSetChat(event,ind)}>
                {chat.users.map((user)=>{ 
                return(
                  user.username + ", "
                )})}
              </div>
              )})
              :""}
            </div>
          </div>
          {/* main chat window*/}
          <div className="messages-main">
            {/* header with title and adding users */}
              <div className="messages-header">
                <h2 className="messages-title">{props.chats[activeChatIndex]?props.chats[activeChatIndex].users.reduce(
                                  (prev,user)=>{
                                    return(prev+user.username + " ")},"")
                    :""}
                </h2>
                
                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">add user</Tooltip>}>
                  <Button className="purple" onClick={handleShow}>+</Button>
                </OverlayTrigger>

                <Offcanvas show ={show} onHide={handleClose} placement="end">
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Add User</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                      {props.users?props.users.map((user)=>{
                        return(<div key={user.id} value={user.id} className="clickable" onClick={()=>handleAddUser("banana",{id:user.id},{id:props.chats[activeChatIndex].id})}>{user.username}</div>)
                      }):""}
                  </Offcanvas.Body>
                </Offcanvas>


                {/* <form className="add-user-search" onSubmit={(event)=>handleAddUser(event,{id:userIdToAdd},{id:props.chats[activeChatIndex].id})}>
                  <select list="user-selector" onChange={(event)=>{handleChangeUserToAdd(event)}}>
                    {props.users?props.users.map((user)=>{
                      return(<option key={user.id} value={user.id}>{user.username}</option>)}):""}
                  </select>
                  <Button type="submit" className="purple" >Add User</Button>
                </form> */}
              </div>
            {/* loaded chat */}
            <div className="active-chat">
              {props.chats[activeChatIndex]?<Chat chat={props.chats[activeChatIndex]}/>:""}
            </div>
            {/* new message form */}
            <div className="new-message">
                {/* new message in loaded chat */}
                <form onSubmit={handleSendMessage}>
                  <input type='text' value={messageText} onChange={handleChangeMessage}></input>
                  <Button className="purple" type="submit">Send</Button>
                </form>
            </div>
          </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    chats:state.chats,
    friends:state.friends,
    users:state.allUsers
  })
  
  const mapDispatchToProps = (dispatch) =>({
    fetchInitialMessages: ()=>dispatch(fetchChats()),
    addChat: ()=>dispatch(addChat()),
    addUser: (user,chat)=>dispatch(addUser(user,chat)),
    sendMessage: (message)=>dispatch(sendMessage(message)),
    fetchUsers: ()=>dispatch(fetchUsers())
  })
  
  export default connect(mapStateToProps,mapDispatchToProps)(ChatList)