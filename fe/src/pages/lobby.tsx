import { useRef } from "react";
import { Input } from "../components/input"
import { useWebSocket } from "../context/WSContext";
import { useNavigate } from "react-router";

export const WaitingPage = ( ) => {
  const inputRoomRef = useRef<any>('');
  const socket = useWebSocket();
  const navigate = useNavigate();

  const createRoom = ( ) => {
    socket?.send(JSON.stringify({
      state : 'create',
      payload : {
        roomId : '',
        message : '',
      }
    }))

    socket!.onmessage = (event : MessageEvent) => {
      const data =JSON.parse(event.data);
      if(data.state === "Accepted"){
        navigate(`/${data.payload.roomId}`);
      }
      console.log(event)
    }
  }

  const joinRoom = ( ) => {

    console.log(JSON.stringify({
      state : 'join',
      payload : {
        roomId :`${inputRoomRef.current}`,
        message : '',
      }
    }));

    socket!.send(JSON.stringify({
      state : 'join',
      payload : {
        roomId : inputRoomRef.current.value,
        message : '',
      }
    }))

    
    navigate(`/${inputRoomRef.current.value}`);
  }
  
  return(
    <div className="flex flex-col justify-evenly items-center bg-amber-400 min-h-72 w-150">
      <div className="flex flex-row justify-between items-center">
        <Input Reference={inputRoomRef} placeholder="Room Code" color="primary"  size="md" />
        <button className='bg-amber-400 p-3' onClick={joinRoom}> Submit</button>
      </div>
      <hr className="min-w-full "/>
      <div>
        <button className='bg-amber-400 p-3 w-48' onClick={createRoom}>Create a room</button> 
      </div>
    </div>
  )
}