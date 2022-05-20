//THIS IS CURRENTLY UNUSED

import socket from 'socket.io-client';
import axios from 'axios'
import store from '.'
import { clientSocket } from './chatStore';
// const clientSocket = socket(window.location.origin);

// clientSocket.on('connect', () => {
//     console.log('Connected to server',clientSocket.id);
//     clientSocket.on("new-message", (newMessage) => {
//         store.dispatch(gotNewMessageFromServer(newMessage));
//       });
//     clientSocket.on("disconnect",()=>{console.log("disconnecting", clientSocket.id)})
//   })

const TOKEN = "token";
const GOT_MESSAGES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";
const GOT_NEW_MESSAGE_FROM_SERVER = "GOT_NEW_MESSAGE_FROM_SERVER";

export const gotMessagesFromServer = (messages) => {
    return {
      type: GOT_MESSAGES_FROM_SERVER,
      messages,
    };
  };
  
  export const gotNewMessageFromServer = (newMessage) => {
    return {
      type: GOT_NEW_MESSAGE_FROM_SERVER,
      newMessage,
    };
  };
  
//   export const writeNewMessage = (newMessageEntry) => {
//     return {
//       type: WRITE_MESSAGE,
//       newMessageEntry,
//     };
//   };


export const fetchMessages = (chat) => {
    return async (dispatch) => {
      const token = window.localStorage.getItem(TOKEN);
      try {
        let { data } = await axios.get(`/api/chats/${chat.id}`,{
            headers: {
              authorization: token,
            },
          });
        dispatch(gotMessagesFromServer(data));
      } catch (err) {
        console.log(err);
      }
    };
  };
  
  export const sendMessage = (newMessage) => {
    return async (dispatch) => {
      try {
        console.log(newMessage);
        const { data } = await axios.post("/api/messages/", newMessage); //message must contain chatid and content
        console.log(data);
        dispatch(gotNewMessageFromServer(data)); //update own store
        socket.emit("new-message", data); //update store on other people's computers
      } catch (error) {
        console.log(error);
      }
    };
  };
  
  const initialState =[]
  //  {

  //   // messages: [],
  //   // newMessageEntry: "",
  // };
  
  const chatReducer = (state = initialState, action) => {
    switch (action.type) {
      case GOT_MESSAGES_FROM_SERVER:
        return action.chats ;
      // case WRITE_MESSAGE:
      //   return { ...state, newMessageEntry: action.newMessageEntry };
      // case GOT_NEW_MESSAGE_FROM_SERVER:
      //   return { ...state, messages: [...state.messages, action.newMessage] };
      default:
        return state;
    }
  };
  export default chatReducer;
  
  