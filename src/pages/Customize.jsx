import { useState } from "react"
import { EditorTabs } from "../config/constants"
import ColorPicker from "../components/ColorPicker";
import FilePicker from "../components/FilePicker";
import AIPicker from "../components/AIPicker";
import { reader } from "../config/helpers";
import state from "../store";
import { useMediaQuery } from '@mui/material';

function Customize() {
const [activeTab,setActiveTab]=useState("")
const [file,setFile]=useState("");
const [prompt,setPrompt]=useState("")
const [generatingImg,setgeneratingImg]=useState(true)
const [activeEditorTab,setActiveEditorTab]=useState();
const [activeFilterTab,setActiveFilterTab]=useState({
  logoShirt:true,
  stylishShirt:false});


 function  handletabclick(tabname){
 setActiveTab(tabname);
 } 

 function handletDecal(type,result){
  state.logoDecal=result;
  }

async function generateShirt (type){
  
  try {
    const response = await fetch("http://localhost:4000/AI/dalle",{
      method:"POST",
      headers:{
        'content-type':"application/json"
      },
      body:JSON.stringify({
        prompt
      })
    })
    console.log("response",response);
    
  } catch (error) {
    console.log("error",error);
    
  }
}
 function readFile(type){
  reader(file).then((result)=>handletDecal(type,result)
  )
 }
 
 const generateTabContent=()=>{
  switch(activeTab){
    case "colorpicker" : return <ColorPicker handletabclick={handletabclick} />
    case "filepicker" : return <FilePicker 
    file={file}
    setFile={setFile}
    readFile={readFile}
    handletabclick={handletabclick}
    />
    case "aipicker" : return <AIPicker 
    setPrompt= {setPrompt}
    generateShirt ={generateShirt}
    handletabclick={handletabclick}
    />
    default : return null
  }
 }
 let isMobile = useMediaQuery('(max-width:768px)');

  return (
   <div style={{
    display:"flex",
    position:"absolute",
    height:"100%",
    justifyContent:"center",
    alignItems:"center",
    width:"60px",
    left:20,
    top:0
   }}>
    <div>
      {
        EditorTabs.map((tab)=>(
      <div key={tab.key} style={{margin:"3px 0px",height:"100px", width:"80px"}}>
        <img
        src={tab.icon}
        alt="icon"
        onClick={()=>handletabclick(tab.name)}
        style={{height: isMobile ? "50px" : "100px",width:isMobile ? "50px" : "100px"}}
        />
      </div>          
        )

      )}
        {generateTabContent()}
    </div>
   </div>
  )
}

export default Customize