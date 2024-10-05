import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import {easing} from 'maath'
import { useSnapshot } from "valtio"
import state from "../store"
function CameraRig({children}) {
  const snap=useSnapshot(state)
    const group=useRef()
    useFrame((state, delta) => {
      easing.damp3(state.camera.position, [0, 0, 2], 0.25, delta)
      easing.dampE(group.current.rotation, [state.pointer.y / 5, -state.pointer.x / 5, 0], 0.25, delta)
    })
  return (
    <group ref={group}>
        {children}
    </group>
  )
}

export default CameraRig