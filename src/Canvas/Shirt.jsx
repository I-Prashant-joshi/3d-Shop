import { useSnapshot } from "valtio"
import state from "../store"
import { Decal, useGLTF, useTexture } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"

function Shirt() {
    const snap= useSnapshot(state)
    const {nodes, materials}=useGLTF(snap.mainModelShirt)
    const logoTexture=useTexture(snap.logoDecal)
    const fullTexture=useTexture(snap.fullDecal)
    const colroCHange= JSON.stringify(snap)
    useFrame((state,delta)=> easing.dampC(materials.lambert1.color,snap.color,0.25,delta))
  return (
    <group key={colroCHange}>
    <mesh
      castShadow
      geometry={nodes.T_Shirt_male.geometry} 
      material={materials.lambert1} 
      material-roughness={1}
      dispose={null}
    >
      {
        snap.isLogoTexture &&
        <Decal
        position={[0,0,0.1]}
        rotation={[0,0,0]}
        scale={0.2}
        map={logoTexture}
        />
      }
 {
        snap.isFullTexture &&
        <Decal
        position={[0,0,0.1]}
        rotation={[0,0,0]}
        scale={0.8}
        map={logoTexture}
        />
      }
    </mesh>
  </group>
  )
}

export default Shirt