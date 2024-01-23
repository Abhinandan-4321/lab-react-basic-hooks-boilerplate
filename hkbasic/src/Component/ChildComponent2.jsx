import { useContext, useEffect, useState } from "react";
import ChildComponent from "./ChildComponent";
import React from 'react'


function ChildComponent2(props) {
    const [content, setContent] = useState('')
    const [like, setLike] = useState(0);

    const handleState = () =>{
        setContent(content => content == " "?props.content:" ")
    }

    const handleLike = ()=>{
        setLike(like => like + 1)
    }

    useEffect(()=>{
        alert("The content is changed")
    },[content])

  return (
    <div>
        <h1>{content}</h1>
        <h1>{like}</h1>
        <button onClick={handleState}>Content</button>
        <button onClick={handleLike}>Like</button>
    </div>
  )
}

export default ChildComponent2
