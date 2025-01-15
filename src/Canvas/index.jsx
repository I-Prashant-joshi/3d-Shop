import { Canvas } from '@react-three/fiber'
import {Center, Environment} from '@react-three/drei'
import CameraRig from './CameraRig';
import Shirt from './Shirt';
function CanvasFrame() {
  return (
   <Canvas
   shadows
   camera={{position:[0, 0, 0],fov:30}}
   >
    <ambientLight intensity={0.5}/>
    <Environment preset='city' />
    <CameraRig>
      {/* <Backdrop /> */}
      <Center>
        <Shirt />
      </Center>
    </CameraRig>
   </Canvas>

  )
}

export default CanvasFrame