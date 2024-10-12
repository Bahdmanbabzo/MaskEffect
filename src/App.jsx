import { useAnimate,motion} from "framer-motion"
import { useEffect, useState } from "react";

function App() {
  const [scope, animate] = useAnimate()
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const box = document.getElementById("mask-parent")
  const handleClick = () => {
    animate(box, {clipPath:['polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)','polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' ]}, {duration:2})
  }
  useEffect(()=> {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [])
  return (
    <div className="h-screen w-screen relative">
    <motion.section
      id="mask-parent"
      className="text-red-600 h-screen w-screen absolute z-30"
      >
      <div className="absolute h-full w-full flex">
        <motion.div 
          animate={{
            WebkitMaskPosition:`${cursorPosition.x-170/2}px ${cursorPosition.y-170/2}px`
          }}
          transition={{type:'tween', ease:'backOut', duration:2}}
          onClick={handleClick}
          className="h-full w-full z-30 bg-[url('/lamboghini.jpg')] bg-cover bg-center"
          style={{WebkitMaskImage:"url('https://img.icons8.com/fluency-systems-filled/100/filled-circle.png')",
          maskRepeat:'no-repeat', 
          maskPosition:'50%', 
          maskSize:'200px'}}
        ></motion.div>
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
