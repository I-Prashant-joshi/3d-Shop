import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
function AIPicker({setPrompt,generateShirt,handletabclick}) {
    const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <>
    <div style={{position:"absolute",left:isMobile ? 50 :80,bottom:isMobile ?200 :340,height:isMobile ?"150px" :"200px",width:"230px",backgroundColor:"#ece8e8"}}>
    <div className='flex justify-end' onClick={()=>handletabclick("close")}><CloseIcon /></div>
    
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{width:"100%",fontSize:"14px",fontWeight:700,textAlign:"center",padding:"10px"}}>
        <label>Please write here ...</label>
        </div>
        <input type='text' placeholder='Please type here... ' onChange={(e)=>setPrompt(e.target.value)} />
      
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"}}>
     
        <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>generateShirt("logo")}>
         Generate
        </button>
      
      </div>
      </div>
   </div>
   </>
  )
}

export default AIPicker