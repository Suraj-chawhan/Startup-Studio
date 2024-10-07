import React,{useState} from 'react'
import Footer from './Footer'
import {FaChevronDown} from "react-icons/fa";


function About() {
  const [isOpen, setIsOpen] = useState({a:false,b:false,c:false,d:false,e:false});

  const toggleDropdown = (id) => {
    if(id===1){
      setIsOpen(val=>({...val,a:!val.a}))
    }
    if(id===2){
      setIsOpen(val=>({...val,b:!val.b}))
    }
    if(id===3){
      setIsOpen(val=>({...val,c:!val.c}))
    }
    if(id===4){
      setIsOpen(val=>({...val,d:!val.d}))
    }
    if(id===5){
      setIsOpen(val=>({...val,e:!val.e}))
    }
  };

  return (
    <div style={{display:"flex",flexDirection:"column",height:"fit-conent",width:"100%",margin:0,padding:0,justifyContent:"space-between"}}>
      <div style={{height:"100vh", backgroundImage:`url(bitcoin.jpg)`,backgroundSize: "cover",backgroundPosition: "center",backgroundRepeat: "no-repeat",opacity:1,color:"white",display:"flex",justifyContent:"flex-start",alignItems:"center",paddingLeft:40}}>
      <div>
      <h1 style={{fontSize:60,color:'yellow'}}>About Section</h1>
      <p style={{fontSize:30,fontFamily:"sans-serif"}}>Welcome to the about section how are you feeling to after visiting this startup studio site.You can devlop your startup idea in to reality</p>
      </div>
      </div>
      <div style={{position:"relative",height:"100vh",background:"linear-gradient(black,white)",display:"flex",justifyContent:"center",alignItems:"center",paddingRight:30}}>
      <div style={{height:"70%",width:"50%",backgroundImage:"url(lion.png)",backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",opacity:1}}>
      <div style={{position:'absolute',left:200,bottom:"24%",height:380,padding:20,width:500,backgroundColor:"white"}}>
      <h1 style={{fontWeight:"bold"}}>We Build the Future With You</h1>
       <p>Startup Studio is an Accelerator and Early Stage Venture Capital Fund. We are a unique platform where talent, resources and financing come together to nurture and develop ideas, arm emerging businesses with the strategy, expertise and capital they need to grow, and to transform existing ventures by injecting them with new capital, talent and innovation. As a team of proven experts, we leverage our operational expertise, entrepreneurial talent and extensive global networks to help founders scale highly profitable and successful businesses Thinking and acting as investors, our specialty is helping optimize startup’s valuation and attraction to investors through quick and tangible show of traction and super charged growth.</p></div>
      </div>
      </div>
      <div style={{height:"fit-content",background:"linear-gradient(gray,white)",display:"flex",flexWrap:"wrap",gap:50,justifyContent:"center",paddingTop:40}}>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:400,height:isOpen.a?"fit-content":500}}>
        <img src="/1.png" style={{borderRadius:"50%",height:300,width:300,alignSelf:'center'}}/>
        <h1>Maninder Dhaliwal, P.Eng, ICD.D</h1>
        <p> Managing Partner & Co-Founder</p>
        <hr/>
        <div onClick={()=>toggleDropdown(1)} style={{display:"flex",justifyContent:'space-between',backgroundColor:"white",padding:10,borderRadius:10,gap:20,alignItems:"center"}}>
         <h3>Read BIO</h3>
        <FaChevronDown size="2em" style={{transform: isOpen.a?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.6s ease",}} />
        </div>
        <hr/>
        <div
        style={{
          height: isOpen.a?500:0,
          opacity: isOpen.a? 1 : 0,
          transition:"all 0.3s ease",
          overflow:"hidden",
          backgroundColor:"white",
          marginTop:10,
          padding: isOpen.a?10:0,
          transform: isOpen.a?"translateY(0)":"translateY(100px)",
        }}>
        <p >Maninder’s background includes technology development and commercialization in Canada and the United States, and venture capital and M&A towards innovation applications and technology start-ups in Silicon Valley and the emerging markets of South-East Asia. She is the founding chair of TiE Vancouver Angels an angel investment forum that leverages the Indus Entrepreneurs’ TiE global investor network of 62 global chapters, including TiE Silicon Valley, and TiE Angels India. She received her Masters in Electrical Engineering from UBC, and Executive Education from Harvard Business School. She holds Professional Engineer (P.Eng.) designation from the Association of Professional Engineers and Geoscientists of BC; and Corporate Director Designation (ICD.D) from the Institute of Corporate Directors.</p>
        </div>
       </div>
       <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:400,height:isOpen.b?"fit-content":500}}>
        <img src="/2.jpg" style={{borderRadius:"50%",height:300,width:300,alignSelf:'center'}}/>
        <h1>Reza Sanaie</h1>
        <p>Board Partner, Tech Stack & Dev Ops</p>
        <hr/>
        <div onClick={()=>toggleDropdown(2)} style={{display:"flex",justifyContent:'space-between',backgroundColor:"white",padding:10,borderRadius:10,gap:20,alignItems:"center"}}>
         <h3>Read BIO</h3>
        <FaChevronDown size="2em" style={{transform: isOpen.b?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.6s ease",}} />
        </div>
        <hr/>
        <div
        style={{
          height: isOpen.b ?500:0,
          opacity: isOpen.b ? 1 : 0,
          transition:"all 0.3s ease",
          overflow:"hidden",
          backgroundColor:"white",
          marginTop:10,
          padding: isOpen.b ?10:0,
          transform: isOpen.b?"translateY(0)":"translateY(100px)",
        }}>
        <p >This is the content of the dropdown. It will slide down when the button is clicked.Reza is the former co-founder and CTO at Beanworks , an accounts payable (AP) automation company based in Vancouver. He built the infrastructure of this industry agnostic software from the ground up, driving innovation and leveraging the best in class technology solutions for businesses globally. His contribution led to Beanworks ’ CAD $106 million acquisition by global giant Quadient in 2021. The acquisition marks one of the largest tech exits for a Vancouver based start up.</p>
      </div>
       </div>
       <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:400,height:isOpen.c?"fit-content":500}}>
        <img src="/3.jpg" style={{borderRadius:"50%",height:300,width:300,alignSelf:'center'}}/>
        <h1>Mark Cunningha</h1>
        <p>Board Partner, Leadership Strategy</p>
        <hr/>
        <div onClick={()=>toggleDropdown(3)} style={{display:"flex",justifyContent:'space-between',backgroundColor:"white",padding:10,borderRadius:10,gap:20,alignItems:"center"}}>
         <h3>Read BIO</h3>
        <FaChevronDown size="2em" style={{transform: isOpen.c?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.6s ease",}} />
        </div>
        <hr/>
        <div
        style={{
          height: isOpen.c ?500:0,
          opacity: isOpen.c? 1 : 0,
          transition:"all 0.3s ease",
          overflow:"hidden",
          backgroundColor:"white",
          marginTop:10,
          padding: isOpen.c?10:0,
          transform:isOpen.c?"translateY(0)":"translateY(100px)",
        }}>
        <p >Mark's passion for solving problems with technology began in 1991, when his family business began building the world's first Windows based reporting tool, Crystal Reports. Crystal was acquired by Seagate and continued to grow to over 2,000 employees and was eventually acquired by Business Objects for $820M. Since his time with Crystal Mark has launched three software companies including Symmetrics , Indicee and Stytch . Indicee, an analytics platform, was acquired by Dun & Bradstreet in 2014 where Mark became the Founder and President of the Dun & Bradstreet Cloud Innovation Center. Stytch , a strategic spin off of Dun & Bradstreet, and Symmetrics were both acquired by Calabrio / KKR in April 2017 to form a new high growth analytics division based in Vancouver.</p>
        </div>
       </div>
      
       <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:400,height:isOpen.d?"fit-content":500}}>
        <img src="/4.jpg" style={{borderRadius:"50%",height:300,width:300,alignSelf:'center'}}/>
        <h1>Mark Cunningha</h1>
        <p>Board Partner, Leadership Strategy</p>
        <hr/>
        <div onClick={()=>toggleDropdown(4)} style={{display:"flex",justifyContent:'space-between',backgroundColor:"white",padding:10,borderRadius:10,gap:20,alignItems:"center"}}>
         <h3>Read BIO</h3>
        <FaChevronDown size="2em" style={{transform: isOpen.d?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.6s ease",}} />
        </div>
        <hr/>
        <div
        style={{
          height: isOpen.d?500:0,
          opacity: isOpen.d? 1 : 0,
          transition:"all 0.3s ease",
          overflow:"hidden",
          backgroundColor:"white",
          marginTop:10,
          padding: isOpen.d?10:0,
          transform:isOpen.d?"translateY(0)":"translateY(100px)",
        }}>
       <p>With over 24 years in the software industry with multiple start ups and established companies, Grant has built and ran sales teams that have consistently met, or exceeded financial and management objectives with some of the largest customers and most complex sales situations on the planet.  

He also has experience in creating and running indirect sales channels such as VARs, VADs, SI's etc. In business development and sales roles for the B2B environment, he has worked with a wide variety of industries and sectors, including financial, insurance, government, aviation, and large enterprise </p>
       </div>
       </div>

       <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:5,width:400,height:isOpen.e?"fit-content":500}}>
        <img src="/5.jpg" style={{borderRadius:"50%",height:300,width:300,alignSelf:'center'}}/>
        <h1>Mark Cunningha</h1>
        <p>Board Partner, Leadership Strategy</p>
        <hr/>
        <div onClick={()=>toggleDropdown(5)} style={{display:"flex",justifyContent:'space-between',backgroundColor:"white",padding:10,borderRadius:10,gap:20,alignItems:"center"}}>
         <h3>Read BIO</h3>
        <FaChevronDown size="2em" style={{transform: isOpen.e?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.6s ease",}} />
        </div>
        <hr/>
        <div
        style={{
          height: isOpen.e?500:0,
          opacity: isOpen.e? 1 : 0,
          transition:"all 0.3s ease",
          overflow:"hidden",
          backgroundColor:"white",
          marginTop:10,
          padding: isOpen.e?10:0,
          transform:isOpen.e?"translateY(0)":"translateY(100px)",
        }}>
        <p >Stephen was formerly the strategic lead at Roche, leading organization to expansion of precision medicine and value based outcomes He was also part of the technology sourcing and integration team at some of the largest international pharma companies including Abbott, Eli Lilly, BD, and Covidien where he created both technology and commercial success through collaboration and macro and micro understanding of the health system and patient pathway</p>
        </div>
       </div>

      </div>
      
      <div style={{justifySelf:"flex-end"}}>
      <Footer/>
      </div>
    </div>
  )
}

export default About