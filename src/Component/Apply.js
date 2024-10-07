import React,{useState} from 'react'
import Footer from './Footer'
import Button from './Button'
function Apply() {

  const [firstName,setFirstName] =useState()
  const [lastName,setLastName] =useState()
  const [email,setEmail] =useState()
  const [linkedin,setLinkedin] =useState()
  const [startupName,setStartupName] =useState()
  const [website,setWebsite] =useState()
  const [location,setLocation] =useState()
  const [elevatorPitch,setElevatorPitch] =useState()
  const [pitchDeck,setPitchDeck] =useState()
  const [stage,setStage] = useState({
    revenue:false,
    seed:false,
    preSeriesA:false,
    seriesA:false,
    other:false,
  });
  const [otherStageInfo,setOtherStageInfo]=useState('');
  const [revenue,setRevenue]=useState({
    below250k:false,
    between250kAnd1m:false,
    between1mAnd10m:false,
    above10m:false,
  });
  const [challenges,setChallenges] =useState('');
  const [referredBy,setReferredBy] =useState('');
  const [additionalComments,setAdditionalComments]=useState('');
  


  const handleStageChange=(key)=>{
    setStage((prev)=>({ ...prev,[key]:!prev[key]}));
  };

  const handleRevenueChange=(key)=>{
    setRevenue((prev)=>({...prev,[key]:!prev[key]}));
  };

  function handleClick(){
    alert("handleClick")
  }

  return (
    <div style={{display:"flex",height:"fit-content",width:"100%",flexDirection:"column",justifyContent:"space-between",gap:50}}>
      <div style={{width:"100%",height:"100%",display:'flex',flexDirection:"column",gap:20}}>
      <p>We fund and advise technology companies towards US and global revenue expansion and access to US and global capital, leveraging: Team of experienced founders with $2B USD in successful exits Track record of $450M+ USD in B2B sales, and $1B+ USD in capital raised (followup capital $27B+ USD) Extended global networks of industry sector experts, and C-suite executives of Fortune500 and Global2000 firms in US, EU, UK and South-East Asia Unparalleled global investor networks of angel investor groups, venture funds, private equity, and family offices in US, Canada, South-East Asia and the Middle-East Founders can get in touch with us using the form below:</p>
      <h1>Founder Name</h1>
     <form style={{width:"80%",alignSelf:"center",display:'flex',flexDirection:"column",gap:28,fontSize:30,padding:20,borderRadius:5}}>
    <div style={{width:"100%",display:'flex',gap:20}}>
    <div style={{width:"100%",display:'flex',flexDirection:'column'}}>
      <label>First Name</label>
    <input style={{padding:10,borderRadius:3,width:"97%",fontSize:20,border:"1px solid black"}} value={firstName} onChange={(e)=>setFirstName(e.target.value)}  type="text" placeholder='First name'/>
    </div>
    <div style={{width:"100%",display:'flex',flexDirection:'column'}}>
      <label>Last Name</label>
    <input style={{padding:10,borderRadius:3,width:"97%",fontSize:20,border:"1px solid black"}} type="text"  value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder='Last name'/>
    </div>
    </div>
    <label>Founder Email</label>
    <input style={{padding:10,borderRadius:3,fontSize:20,border:"1px solid black"}}type="email"  value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder='Founder Email'/>
    <label>Founder Linkdin profile</label>
    <input style={{padding:10,borderRadius:3,fontSize:20,border:"1px solid black"}}type="text"  value={linkedin} onChange={(e)=>setLinkedin(e.target.value)} placeholder='Founder Linkdin Profile'/>
    <label>Startup Name</label>
    <input style={{padding:10,borderRadius:3,fontSize:20,border:"1px solid black"}}type="text" value={startupName}   onChange={(e)=>setStartupName(e.target.value)} placeholder='Startup Name'/>
    <label>Website</label>
    <input style={{padding:10,borderRadius:3,fontSize:20,border:"1px solid black"}}type="text" value={website} onChange={(e)=>setWebsite(e.target.value)}  placeholder='https://'/>
    <label>Where are you located?</label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={elevatorPitch} onChange={(e)=>setElevatorPitch(e.target.value)}  ></textarea>  
    <label>Startup Elevator Pitch Link</label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={pitchDeck} onChange={(e)=>setPitchDeck(e.target.value)} ></textarea>  
    <label>Pitch Deck Link Video</label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={stage} onChange={(e)=>setStage(e.target.value)} ></textarea>  
    <label>What stage is the startup?</label>
    <div>
    <div style={{display:"flex",flexDirection:'column',gap:10}}>
        <div>
      <input type="checkbox"  checked={stage.revenue} onChange={()=>handleStageChange('revenue')}  style={{width:24,height:24,marginRight:20,border:"1px solid black"}} />
      <label>Some revenue</label>
      </div>
      <div>
      <input type="checkbox" checked={stage.seed} onChange={()=>handleStageChange('seed')} style={{width:24,height:24,marginRight:20,border:"1px solid black"}} />
      <label> Pre-seed/seed raised</label>
      </div>
      <div>
      <input type="checkbox"  checked={stage.preSeriesA} onChange={()=>handleStageChange('preSeriesA')} style={{width:24,height:24,marginRight:20,border:"1px solid black"}} />
      <label>Pre-Series A</label>
      </div>
      <div>
      <input type="checkbox"  checked={stage.seriesA} onChange={()=>handleStageChange('seriesA')} style={{width:24,height:24,marginRight:20,border:"1px solid black"}} />
      <label>Series A raised </label>
      </div>
      <div>
      <input type="checkbox" checked={stage.other} onChange={()=>handleStageChange('other')}  style={{width:24,height:24,marginRight:20,border:"1px solid black"}} />
      <label>Other</label>
      </div>
     </div>
    </div>
    <label>If other, please provide more information</label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={otherStageInfo} onChange={(e)=>setOtherStageInfo(e.target.value)} ></textarea>  
    <label> Current Annual Revenue</label>
    <div>
    <div style={{display:"flex",flexDirection:'column',gap:10}}>
        <div>
      <input type="checkbox"  style={{width:24,height:24,marginRight:20,border:"1px solid black"}}  checked={revenue.below250k} onChange={() => handleRevenueChange('below250k')}/>
      <label>Below $250K</label>
      </div>
      <div>
      <input type="checkbox"  style={{width:24,height:24,marginRight:20,border:"1px solid black"}}  checked={revenue.between250kAnd1m} onChange={() => handleRevenueChange('between250kAnd1m')} />
      <label>$250K-$1m</label>
      </div>
      <div>
      <input type="checkbox"  style={{width:24,height:24,marginRight:20,border:"1px solid black"}}   checked={revenue.between1mAnd10m} onChange={() => handleRevenueChange('between1mAnd10m')}/>
      <label>$1m-$10m</label>
      </div>
      <div>
      <input type="checkbox"  style={{width:24,height:24,marginRight:20,border:"1px solid black"}}   checked={revenue.above10m} onChange={() => handleRevenueChange('above10m')} />
      <label>$10m+</label>
      </div>
     </div>
    </div>
    <label>Is there anything else besides lack of capital that you think is holding you back?</label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}   value={challenges} onChange={(e)=>setChallenges(e.target.value)} ></textarea> 
    <label>If referred by someone, please let us know </label>
    <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={referredBy} onChange={(e)=>setReferredBy(e.target.value)}></textarea> 
    <label>Any additional comments - 100 words or less</label>
  <textarea style={{padding:30,fontSize:20,border:"1px solid black",borderRadius:3}}  value={additionalComments} onChange={(e)=>setAdditionalComments(e.target.value)} ></textarea> 
  <div style={{alignSelf:"center"}}>
 <Button size={40} call={handleClick}/>
 </div>
</form>
</div>
<div style={{justifySelf:"flex-end",marginTop:30}}>
      <Footer/>
      </div>
</div>
  )
}

export default Apply

