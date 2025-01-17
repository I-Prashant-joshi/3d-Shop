import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from '@mui/material';
function FilePicker({file,setFile,readFile,handletabclick}) {
  const isMobile = useMediaQuery('(max-width:768px)');
  return (
    <div style={{position:"absolute",left:isMobile ? 50 :90,bottom:isMobile ?250:380,width:"230px",backgroundColor:"#ece8e8"}}>
      <div className='flex justify-end' onClick={()=>handletabclick("close")}><CloseIcon /></div>
    
      <div style={{display:"flex",flexDirection:"column"}}>
        <div style={{width:"100%",fontSize:"14px",fontWeight:700,textAlign:"center",padding:"10px"}}>
        <label>Upload your file</label>
        </div>
      <input 
      type='file'
      style={{display:"block",width:"100%"}}
      name='file'
      accept='image/*'
      onChange={(e)=>(setFile(e.target.files[0]))}
      />
      <div style={{width:"100%",padding:"20px 10px",whiteSpace:"normal",textWrap:"wrap",overflow:"hidden"}}>
      <label>{file === ""? "No File Selected": file.name }</label>
      </div>
      <div style={{width:"90%",display:"flex",justifyContent:"space-between",padding:"10px"}}>
      <button>
          Full
        </button>
        <button style={{backgroundColor:"blue",color:"white"}} onClick={()=>readFile("logo")}>
          Logo
        </button>
      
      </div>
      </div>
   </div>
  )
}

export default FilePicker