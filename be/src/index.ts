import {WebSocketServer, WebSocket} from 'ws'

const wss = new WebSocketServer({port : 8080});

const socketMaps: Map<string, WebSocket[]> = new Map();

// {
//   state : 'create',
//   payload : {
//     roomId : '',
//     message : '',
//   }
// }

const generateRoom = ( ) : string => {
  let caseString : string = "abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let genCode = "";
  for(let i=0 ; i< 7; i++){
    genCode += caseString[Math.floor(Math.random() * caseString.length)]
  }
  return genCode;
}

wss.on('connection', (socket) =>{
  socket.on('message', (event) =>{
    const jsonData = JSON.parse(event.toString());
    if(jsonData.state == 'create'){
      const roomId = generateRoom();
      socketMaps.set(roomId, [socket]);
      console.log(socketMaps);
      socket.send(JSON.stringify({
        state : "Accepted",
        payload : {
          roomId,
          message : 'Accepted',
        } 
      }))
    }
    else if(jsonData.state == 'join'){
      const roomId = jsonData.payload.roomId;
      //@ts-ignore
      const socketArray : WebSocket[]  = socketMaps.get(roomId);
      if (!socketArray) {
        console.error(`Cannot join non-existent room "${roomId}"`);
        return;
      }
      socketMaps.set(roomId, [...socketArray, socket]);
    }
    else if(jsonData.state == 'message'){
      console.log(jsonData);
      const { roomId , message} = jsonData.payload;
      //@ts-ignore
      const socketArray : WebSocket[]  = socketMaps.get(roomId);

       if (!socketArray) {
        console.error(`Room ID "${roomId}" not found.`);
        return;
      }
      socketArray.forEach((el : any) => el.send(message));
    }
    
  })
} )