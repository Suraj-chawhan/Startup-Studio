import React, { Suspense,useRef} from 'react'
import Process from './Process'
import Footer from './Footer';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars,Html, useGLTF} from '@react-three/drei';
import { useNavigate } from 'react-router-dom';
import Model1 from './Space.js';
import Button from "./Button.js"



function Model(){

 const meshRef=useRef()
  const {scene}=useGLTF("/bitcoin.glb")
  
  useFrame(()=>{
   meshRef.current.rotation.y+=0.01;
  },[])

  return(
  <mesh>
   <primitive object={scene}  scale={[0.1,0.1,0.1]} position={[0,-3.5,-6]}  ref={meshRef} />
 </mesh> 
  )
}



 




function Home() {

 const navigate=useNavigate()


const handleClick=()=>{
  navigate("/apply")
}


  return (
    <div style={{margin:0,padding:0,height:"100vh"}}>
      <Canvas style={{display:"flex",width:"100%",height:"100vh",backgroundColor:"black"}}>
      <Html  fullscreen style={{display:"flex", flexDirection:"column",color:"white",alignItems:"center",justifyContent:"center",gap:20}}>
          <h1 style={{fontSize:60,color:"#ff1"}}>Startup Studio</h1>
          <h2 style={{fontFamily:"sans-serif",fontSize:30}}>Accelerator and Early Stage Venture Capital Fund</h2>
          <Button size={40} call={handleClick}/>
        </Html>
        <ambientLight  intensity={10} />
        <hemisphereLight intensity={5} />
        <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={5} />
        <Model1/>
      </Canvas>

      <div style={{ height:"fit-content", background:"linear-gradient(black,white)",display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"center",color:"white"}}>
        <div>
        <h1 style={{textAlign:'center',fontSize:40}}>Process</h1>
        <div style={{ display:"flex", justifyContent:'space-evenly', alignItems:"center",gap:80, flexWrap:"wrap",position:"relative" ,padding:30}}>
          <Process img="engine.jpg" title="hi" paragraph="hello world" />
          <Process img="tree.jpg" title="hi" paragraph="hello world" />
          <Process img="a.jpg" title="hi" paragraph="hello world" />
        </div>
        </div>
    
      </div>
      
      <Canvas style={{ height:500,width:"100%",backgroundColor:"pink",backgroundImage: `url(bitcoin.jpg)`, backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",opacity:1}}>
      <Suspense  fallback={<Html><h1>Loading</h1></Html>}>
      <Model  />
      </Suspense>
      <ambientLight intensity={5} />
      <hemisphereLight  intensity={10} color={"green"}/>
       <Html fullscreen style={{fontSize:50,display:"flex",flexDirection:"column",gap:30,backgroundColor:"rgba(0, 0, 0, 0.5)"}} >
          <h1 style={{textAlign:"center",color:"red",fontSize:40}}>TRACK RECORD</h1>
          <div style={{width:"100%",display:"flex",gap:200,justifyContent:"center",color:"#ef1",shadow:"1px 1px black"}}>
            <div>
             <h1>SCALED: 450M+</h1>
             <h2>In B2B Revenue</h2>
            </div>
            <div>
            <h1>RAISED: 1B+</h1>
            <h2>Pre-seed, Seed</h2>
            </div>
            </div>
            <div style={{display:"flex",gap:200,justifyContent:"center",color:"#ef1",shadow:"1px 1px black"}}>
            <div style={{marginLeft:20}}>
             <h1>SUPPORTED: 120+</h1>
             <h2>Startup</h2>
            </div>
            <div>
            <h1>LEVERAGED: 27B+</h1>
            <h2>Followup Capital</h2>
            </div>
            </div>
          
          </Html>
      </Canvas>
      <div style={{height:"fit-content",background:"linear-gradient(white,#555)"}}>
      
      <div style={{height:"fit-content",display:"flex",flexDirection:"column"}}>
      <div style={{display:"flex",justifyContent:"space-evenly",paddingTop:10,height:"50%",flexWrap:"wrap"}}>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
          <img src="cafe.jpg" style={{width:600,height:400}} alt="cafe" />
          <p style={{backgroundColor:"white",padding:20,width:250,position:'relative',bottom:"20%",left:"-30%"}}>“Within 7 days of signing up Startup Studio, we had facetime with our dream client, and within 6 weeks we had our purchase order. The speed at which they made an impact on our growth was mind blowing! We are very grateful for their work with us.”
          <span style={{fontWeight:"bold"}}>— Canada based SaaS founder</span></p>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
          <img src="office.jpg" style={{width:600,height:400}} alt="office" />
          <p style={{backgroundColor:"white",padding:20,width:250,position:'relative',bottom:"20%",left:"-30%"}}>“Within 7 days of signing up Startup Studio, we had facetime with our dream client, and within 6 weeks we had our purchase order. The speed at which they made an impact on our growth was mind blowing! We are very grateful for their work with us.”
          <span style={{fontWeight:"bold"}}>— Canada based SaaS founder</span></p>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
          <img src="lib.jpg" style={{width:600,height:400}} alt="library" />
          <p style={{backgroundColor:"white",padding:20,width:250,position:'relative',bottom:"20%",left:"-30%"}}>“Within 7 days of signing up Startup Studio, we had facetime with our dream client, and within 6 weeks we had our purchase order. The speed at which they made an impact on our growth was mind blowing! We are very grateful for their work with us.”
          <span style={{fontWeight:"bold"}}>— Canada based SaaS founder</span></p>
        </div>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}} >
          <img src="canteen.jpg" style={{width:600,height:400}} alt="canteen" />
          <p style={{backgroundColor:"white",padding:20,width:250,position:'relative',bottom:"20%",left:"-30%"}}>“Within 7 days of signing up Startup Studio, we had facetime with our dream client, and within 6 weeks we had our purchase order. The speed at which they made an impact on our growth was mind blowing! We are very grateful for their work with us.”
          <span style={{fontWeight:"bold"}}>— Canada based SaaS founder</span></p>
        </div>
        </div>
      </div>
      </div>
      <Footer />
      </div>
  )
}

export default Home