import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

  const gsapRef = useRef()

  useGSAP(()=>{
    gsap.to(gsapRef.current, {
      x:1080,
      duration:2,
      delay:1,
    })

  })

  return (
    <main>
      <div ref={gsapRef} className="box">

      </div>
    </main>
  )
}

export default App
