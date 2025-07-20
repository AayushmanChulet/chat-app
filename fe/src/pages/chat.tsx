import { useEffect, useRef, useState } from "react";
import { Input } from "../components/input"
import { useParams } from "react-router";
import { useWebSocket } from "../context/WSContext";

export const ChatPage = ( ) => {
  const[chat, setChat] = useState([]);
  const {id} = useParams()
  const textRef = useRef('');
  const socket = useWebSocket();
  
  
  useEffect(() => {
    if(!socket) return;

    const handler = (event : MessageEvent) => {
      //@ts-ignore
      setChat((prev) => [...prev , event.data]);
    }

    socket.addEventListener('message', handler);
    
    return () => socket.removeEventListener('message', handler);
  } ,[socket])

  const sendMessage = ( ) => {
    socket?.send(JSON.stringify({
      state : 'message',
      payload : {
        roomId : id,
        message : `${textRef.current.value}`,
      }
    }))
    textRef.current.value = ''
  }
  return(
    <div className="flex flex-col justify-between items-center bg-amber-400 max-h-72 max-w-150">
      <div className="bg-blue-500 max-w-full min-h-64 overflow-clip wrap-break-word">
        {chat.map((message) => {
          return <div className="wrap-normal">{message}</div>
        })}
      </div>
      <div>
        <Input Reference={textRef} placeholder="Type here" color="primary" size="lg"/>
        <button onClick={sendMessage}>Submit</button>
      </div>
    </div>
  )
}