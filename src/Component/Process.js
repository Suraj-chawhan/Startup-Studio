import React from 'react'

function Process({img,title,paragraph}) {
  return (
    <div style={{position:"relative",width:450,height:350,backgroundColor:"blue"}}>
        <img src={`/${img}`} style={{width:"100%",height:"100%"}} alt={`${img}`} />
        <div style={{position:"absolute",top:"25%",left:"40%",textAlign:"center"}}>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        </div>
    </div>
  )
}

export default Process