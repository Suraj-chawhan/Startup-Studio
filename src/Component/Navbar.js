import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'
function Navbar() {

  const navigate=useNavigate()
  const handleClick=()=>{
    navigate("/apply")
  }

  return (
   <nav style={{display:"flex",justifyContent:"space-between",alignItems:"center",background: 'linear-gradient(black, green)',padding:10,borderBottom:"2px solid",borderBottomColor:"#ff1"}}>
    <img src="/logo.png"   style={{width:100,height:100}}alt="logo"/>
    <div style={{display:"flex",alignItems:"center",gap:30}}>
    <ul style={{display:"flex",alignItems:"center",listStyle:"none",gap:10}}>
        <li><Link to="/" className='link'>HOME</Link></li>
        <li><Link to="/about" className='link'>ABOUT</Link></li>
    </ul>
   <Button size={24} call={handleClick}/>
    </div>
   </nav>
  )
}

export default Navbar