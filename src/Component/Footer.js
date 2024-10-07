import React from 'react'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
function Footer() {
  const navigate=useNavigate()
const handleClick=()=>{
  navigate("/apply")
}
const handleClick2=()=>{
  navigate("/subscribe")
}
  return (
    <div style={{width:"100%",height:200,background:"linear-gradient(black,green)",display:"flex",justifyContent:"space-evenly",alignItems:'center',color:'white'}}>
    <Button size={30} call={handleClick}/>
     <div>
       <Button text="Subscribe" size={30} call={handleClick2}/>
        <h3 style={{color:"#dd1"}}>JOIN OUR MAILING LIST</h3>
     </div>
    </div>
  )
}

export default Footer