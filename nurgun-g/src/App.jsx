import { createRef,useState } from 'react'
// import { useScreenshot } from 'use-react-screenshot'
import Twt from './Twt';
import Examples from './Examples';
import './App.css'
import Header from './Header'
// import { AvatarLoader } from './loader.jsx';
function App() {

  return (
    <div className={`twitter `}>
      <Header/>
      <Twt/>
    </div>
  )
}

export default App
