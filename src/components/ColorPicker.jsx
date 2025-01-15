import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import CloseIcon from '@mui/icons-material/Close';
import state from '../store'
function ColorPicker({handletabclick}) {
    const snap = useSnapshot(state)
  return (
    <div style={{position:"absolute",left:80,bottom:380}}>
      <div className='flex justify-end' onClick={()=>handletabclick("close")}><CloseIcon /></div>
     <SketchPicker
     color={snap.color}
     onChange={(color)=>state.color=color.hex}
     disableAlpha
     />
    </div>
  )
}

export default ColorPicker