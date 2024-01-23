import { createContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChildComponent from './Component/ChildComponent'

export const theme = createContext()

function App() {
  const [state, setState] = useState(true)


  const falseMaker = () =>{
    setState((state) => !state)
    // if(state== false){
    //   document.body.style.background = "black";
    // }
    // if(state == true){
    //   document.body.style.background = "brown"
    // }
  }

  return (
    <>
      <theme.Provider value = {state}>
      <button onClick={falseMaker}>Change Color</button>
      <ChildComponent/>
      </theme.Provider>
    </>
  )
}

export default App
