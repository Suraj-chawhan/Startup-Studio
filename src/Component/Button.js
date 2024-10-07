import React from 'react'
import "./Button.css"
function Button({size,text,call}) {
  return (
    <button className='btn' style={{fontSize:size,padding:size===40?20:10}}  onClick={call}>{text?text:"Apply Now"}</button>
  )
}

export default Button