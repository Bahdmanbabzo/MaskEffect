import { useAnimate,motion} from "framer-motion"
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="h-screen w-screen relative">
    <motion.section
      id="mask-parent"
      className="text-red-600 h-screen w-screen absolute z-30"
      >
      <div className="absolute h-full w-full flex">
        <motion.div ></motion.div>
      </div>
        <motion.div className="h-full w-full bg-black border-8 border-amber-500">  </motion.div>
    </motion.section>
      <motion.section className="bg-[url('/lamboghini.jpg')] bg-cover bg-center h-full w-full absolute z-10">
          <p className="font-extrabold text-5xl absolute left-0 top-3/4 text-amber-500"><span className="text-black">Built for speed</span>, with speed...</p>
      </motion.section>
  </div>
  )
}

export default App
