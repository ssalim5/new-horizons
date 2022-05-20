import React, {useState,useEffect} from "react";
// import Message from "./Message";
export const Chat = (props) =>{
    console.log(props.chat)
    return(
        <div className="messages">
          {props.chat.messages?props.chat.messages.map((message)=>{
              return(
                  <div>{message.user.username}:{message.content}</div>
              )
          }):""}
        </div>

      );
}
