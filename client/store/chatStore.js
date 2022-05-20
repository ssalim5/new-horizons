import socket from 'socket.io-client';
import axios from 'axios'
import store from '.'
export const clientSocket = socket(window.location.origin);

clientSocket.on('connect', () => {
    console.log('Connected to server',clientSocket.id);
    clientSocket.on("new-message", (newMessage) => {
        // store.dispatch(gotNewMessageFromServer(newMessage));
        store.dispatch(fetchChats())
      });
    clientSocket.on("disconnect",()=>{console.log("disconnecting", clientSocket.id)})
  })

const TOKEN = "token";
const GOT_MESSAGES_FROM_SERVER = "GOT_MESSAGES_FROM_SERVER";
// const GOT_NEW_MESSAGE_FROM_SERVER = "GOT_NEW_MESSAGE_FROM_SERVER";

export const gotMessagesFromServer = (chats) => {
    return {
      type: GOT_MESSAGES_FROM_SERVER,
      chats,
    };
  };
  
  // export const gotNewMessageFromServer = (newMessage) => {
  //   return {
  //     type: GOT_NEW_MESSAGE_FROM_SERVER,
  //     newMessage,
  //   };
  // };
  
//   export const writeNewMessage = (newMessageEntry) => {
//     return {
//       type: WRITE_MESSAGE,
//       newMessageEntry,
//     };
//   };


export const fetchChats = () => {
    return async (dispatch) => {
      const token = window.localStorage.getItem(TOKEN);
      try {
        let { data } = await axios.get("/api/chats",{
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
  
  export const addChat = ()=>{ //creates a chat with logged in user as log in
    return async (dispatch) => {
      const token = window.localStorage.getItem(TOKEN);
      try {
        let { data } = await axios.post("/api/chats/",null,{
          headers: {
            authorization: token,
          },
          });
        dispatch(fetchChats()); //could define action creator instead of calling thunk
      } catch (err) {
        console.log(err);
      }
    };
  }

  export const addUser = (user,chat)=>{ //Adds a user to a room input user and chat only need id fields
    return async (dispatch) => {
      try {
        let { data } = await axios.put("/api/chats/user",{
            user:user,chat:chat
          });
        dispatch(fetchChats());
      } catch (err) {
        console.log(err);
      }
    };
  }

  export const sendMessage = (newMessage) => {
    return async (dispatch) => {
      try {
        console.log(newMessage);
        const { data } = await axios.post("/api/messages/", newMessage); //message must contain chatid and content
        console.log(data);
        dispatch(fetchChats())
        // dispatch(gotNewMessageFromServer(data)); //update own store
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
        // return {...state, chats:action.chats} ;
      // case WRITE_MESSAGE:
      //   return { ...state, newMessageEntry: action.newMessageEntry };
      // case GOT_NEW_MESSAGE_FROM_SERVER:
      //   return { ...state, messages: [...state.messages, action.newMessage] };
      default:
        return state;
    }
  };
  export default chatReducer;
  
  