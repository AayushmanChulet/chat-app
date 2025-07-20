import { createContext, useContext, useEffect, useRef, useState } from "react"

const wsContext = createContext<WebSocket | null>(null);

export const WebSocketContext = ( { children }: { children: React.ReactNode } ) => {
  const [ws, setWs] = useState<WebSocket | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080');
    setWs(socket);

    return () => socket.close();
  }, []);

  return(
    <wsContext.Provider value={ws}>
      {children}
    </wsContext.Provider>
  )
}


export const useWebSocket = ( ) =>  useContext(wsContext);