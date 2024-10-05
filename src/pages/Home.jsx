import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"
import state from "../store"
import {slideAnimation} from '../config/motion'
function Home() {
    const snap = useSnapshot(state);
  return (
    <AnimatePresence>
        {
            snap.intro && (
                <motion.section {...slideAnimation("left")}>
                    <motion.header {...slideAnimation("down")}>
                        <img src="./threejs.png" className="h-8 w-8 object-contain"  />
                    </motion.header>
                </motion.section>
            )
        }
    </AnimatePresence>
  )
}

export default Home