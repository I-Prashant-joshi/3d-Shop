import { proxy } from "valtio";

const state = proxy({
    intro:true,
    color:"white",
    isLogoTexture: true,
    isFullTexture:false,
    logoDecal:'./threejs.png',
    fullDecal:'./threejs.png',
    mainModelShirt:"./shirt_baked.glb"
})
export default state;