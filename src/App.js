import './App.css';
import React from "react";
import './App.css'
import SlotM from './SlotM'

const symbol = ['👍', '🥇', '🎅', '🙉', '🍎', '🍌', '🕌'];

const generateRandom =()=>{
  const randomIdx = Math.floor(Math.random() * symbol.length);
  return symbol[randomIdx]
}

const App=()=>{
  return(
    <>
      <h1 className='heading_style'> {'🎰'} Welcome to Slot Machine Game {'🎰'}</h1>
      <div className='slotmachine'>
      <SlotM x= {generateRandom()}  y= {generateRandom()} z= {generateRandom()} />
      <SlotM x= {generateRandom()}  y= {generateRandom()} z= {generateRandom()}/>
      <SlotM x= {generateRandom()}  y= {generateRandom()} z= {generateRandom()}/>
      <SlotM x= {generateRandom()}  y= {generateRandom()} z= {generateRandom()}/>
      </div>
    </>
  )
}

export default App;
