import React, {useState,useEffect} from "react";
// import Message from "./Message";
export const Chat = (props) =>{
    console.log(props.chat.messages.sort((a,b)=>{return(a.id-b.id)}))
    return(
        <div className="messages">
          {props.chat.messages?props.chat.messages.sort((a,b)=>{
          // console.log(a.createdAt,b.createdAt)
          return(a.id-b.id)}).map((message)=>{
              return(
                  <div key ={message.id} className="msg">
                    <div className="msg-user">
                      <img className="msg-img" src={message.user.imageUrl} alt="image" />
                      <div className="msg-username">{message.user.username}</div>
                    </div>
                    <div className="msg-text">{message.content}</div>
                  </div>
              )
          }):""}
        </div>

      );
}
