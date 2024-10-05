import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store'
function ColorPicker() {
    const snap = useSnapshot(state)
  return (
    <div style={{position:"absolute",left:80,bottom:380}}>
     <SketchPicker
     color={snap.color}
     onChange={(color)=>state.color=color.hex}
     disableAlpha
     />
    </div>
  )
}

export default ColorPicker