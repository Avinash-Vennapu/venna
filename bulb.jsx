import React, { useState } from 'react'
import on from "./switch on.jpg"
import off from "./switch off.jpg"

const App = () => {
  let [state,setState]=useState(true)
  let change=()=>{
    setState(!state)
  }
  return (
    <>
    <img src={state?on:off} alt="" />
    <button onClick={change}>{state?"off":"on"}</button>
    


    </>
  )
}

export default App