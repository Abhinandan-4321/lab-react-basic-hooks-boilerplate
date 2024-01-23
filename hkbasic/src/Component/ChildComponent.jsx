import React ,{useContext} from 'react'
import {theme} from "/src/App.jsx"
import ChildComponent2 from './ChildComponent2'
function ChildComponent() {
    const data = useContext(theme)

    const themeStyle={
        backgroundColor : data?"black":"grey",
        color:data?"grey":"black",
        padding:"2rem",
        margin:"2rem",
        width:"80vw"
    }
    const content='My name is Abhinandan';
    return (
    <div style={themeStyle}>
    <ChildComponent2 content={content}/>
    </div>
  )
}

export default ChildComponent
