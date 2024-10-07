import React from 'react'

function Subscribe() {
  return (
   <div style={{width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#aaa"}}>
    <div style={{width:500,height:700,backgroundColor:'white',display:"flex",flexDirection:"column",justifyContent:"center",gap:2,fontSize:30,padding:50,margin:20,borderRadius:14,border:"1px solid black"}}>
    <img src="subscribe.png" style={{width:200,height:200,alignSelf:"center"}}  alt="logo" />
    <h2>Email Address</h2>
    <input style={{padding:14,fontSize:18,border:"1px solid black"}} type="email"  placeholder='Email Address'/>
    <h2>First Name</h2>
    <input style={{padding:14,fontSize:18,border:"1px solid black"}} type="text"  placeholder='First Name'/>
    <h2>Last Name</h2>
    <input style={{padding:14,fontSize:18,border:"1px solid black"}} type="text"  placeholder='Last Name'/>
    </div>
   </div>
  )
}

export default Subscribe