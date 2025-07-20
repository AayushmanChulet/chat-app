import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from './components/input'
import { WaitingPage } from './pages/lobby'
import { ChatPage } from './pages/chat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-w-screen min-h-screen flex justify-center items-center'>
      <ChatPage />
    </div>
  )
}

export default App

//<div className="relative w-full h-screen overflow-hidden bg-[#0f0c29]">
//   {/* Soft base gradient */}
//   <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-yellow-400 to-pink-500 opacity-20" />

//   {/* Glowing circles */}
//   <div className="absolute w-[400px] h-[400px] rounded-full bg-cyan-400 blur-[160px] opacity-60 top-[10%] left-[15%]" />
//   <div className="absolute w-[320px] h-[320px] rounded-full bg-yellow-400 blur-[140px] opacity-50 bottom-[15%] left-[20%]" />
//   <div className="absolute w-[360px] h-[360px] rounded-full bg-pink-500 blur-[160px] opacity-45 bottom-[10%] right-[15%]" />
//   <div className="absolute w-[300px] h-[300px] rounded-full bg-indigo-500 blur-[140px] opacity-45 top-[20%] right-[10%]" />
//   <div className="relative z-10 flex items-center justify-center h-full text-white text-5xl font-semibold tracking-wide ">
//     <div >
      
//     </div>
//   </div>
// </div>
