import React from 'react'

function AIPicker({setPrompt,generateShirt}) {
  return (
    <div style={{position:"absolute",left:80,bottom:340,height:"200px",width:"230px",backgroundColor:"#ece8e8"}}>
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{width:"100%",fontSize:"14px",fontWeight:700,textAlign:"center",padding:"10px"}}>
        <label>Please write here ...</label>
        </div>
        <input type='text' placeholder='Please type here... ' onChange={(e)=>setPrompt(e.target.value)} />
      
      <div style={{width:"100%",display:"flex",justifyContent:"space-between",padding:"10px"}}>
      {/* <button>
          Full
        </button> */}
        <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>generateShirt("logo")}>
         Generate
        </button>
      
      </div>
      </div>
   </div>
  )
}

export default AIPicker