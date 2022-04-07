import { useRef, useState } from 'react'
import { OrbitControls, TorusKnot } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'

const secretMessage = 'Unless you have malicious intent.'

export default function App() {
  const [showSecretMessage, setShowSecretMessage] = useState(false)

  return (
    <div className="relative h-screen w-full text-white overflow-clip">
      <div
        className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600
				group-hover:opacity-100"
      />
      <div
        className="py-16 px-12 absolute flex flex-col h-screen w-full md:w-1/2
				justify-between z-10"
      >
        <h1 className="text-5xl font-bold opacity-80">Gavin Fogel</h1>
        <span className="text-4xl">Working on building the future of finance. Previously Cornell student.</span>
        <div
          className="w-full bg-gray-200 bg-opacity-10 backdrop-blur-md 
					md:bg-transparent md:backdrop-blur-none"
        >
          <span className="text-2xl">
            Currently interested in consumer fintech and all aspects of engeering to enable such, specifically frontend technologies.
          </span>
        </div>
        <div className="flex flex-row space-x-3">
          <Button label="EMAIL" hiddenText="gavin@fogel.io" href="mailto:gavin@fogel.io" />
          <Button label="TWITTER" hiddenText="@gavinfogel" href="https://twitter.com/gavinfogel" />
        </div>
        <span className="text-xs">Feel free to reach out about anything.</span>
      </div>
      <div
        className="absolute w-full translate-x-0  h-screen md:w-2/3 
				md:translate-x-[60%]"
      >
        <RotatingRing />
      </div>
    </div>
  )
}

const Button = ({ onClick, label, hiddenText, href }) => {
  const [touched, setTouched] = useState(false)
  const [activeLabel, setActiveLabel] = useState(label)

  return (
    <button
      className=" w-full border border-white p-6 hover:text-gray-300
			hover:border-gray-300 transition duration-500"
      onMouseEnter={() => setActiveLabel(hiddenText)}
    >
      <a href={href}>{activeLabel}</a>
    </button>
  )
}

const RotatingRing = () => {
  return (
    <Canvas>
      {/* <color attach="background" args={['black']} /> */}
      <OrbitControls />
      <Thing />
    </Canvas>
  )
}

const Thing = () => {
  const ref = useRef()
  useFrame(() => (ref.current.rotation.y += 0.01))
  return (
    <TorusKnot ref={ref} args={[1, 0.3, 128, 16]}>
      <meshNormalMaterial />
    </TorusKnot>
  )
}
