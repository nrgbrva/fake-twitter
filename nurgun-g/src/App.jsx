import { createRef, useState } from 'react'
import Twt from './Twt';
import './App.css'
import Header from './Header'
function App() {
  return (
    <div className={`twitter `}>
      <Header />
      <Twt />
    </div>
  )
}
  


export default App
