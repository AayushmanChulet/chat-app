import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router';
import './index.css'
import App from './App.tsx'
import { WaitingPage } from './pages/lobby.tsx';
import { ChatPage } from './pages/chat.tsx';
import { WebSocketContext } from './context/WSContext.tsx';

const Router = createBrowserRouter([
  {
    path : "/",
    element : <WaitingPage />
  },
  {
    path : "/:id",
    element : <ChatPage />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WebSocketContext> 
      <RouterProvider router={Router}>
        <App />
      </RouterProvider>
    </WebSocketContext>
  </StrictMode>,
)
