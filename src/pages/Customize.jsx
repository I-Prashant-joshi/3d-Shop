import { useState } from "react"
import { EditorTabs } from "../config/constants"
import ColorPicker from "../components/ColorPicker";
import FilePicker from "../components/FilePicker";
import AIPicker from "../components/AIPicker";
import { reader } from "../config/helpers";
import state from "../store";

function Customize() {
const [activeTab,setActiveTab]=useState("")
const [file,setFile]=useState("");
const [promt,setPrompt]=useState("")
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

 function readFile(type){
  reader(file).then((result)=>handletDecal(type,result)
  )
 }
 
 const generateTabContent=()=>{
  switch(activeTab){
    case "colorpicker" : return <ColorPicker />
    case "filepicker" : return <FilePicker 
    file={file}
    setFile={setFile}
    readFile={readFile}
    />
    case "aipicker" : return <AIPicker />
    default : return null
  }
 }
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