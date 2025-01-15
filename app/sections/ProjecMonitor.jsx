import { Center, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import  { Suspense } from 'react'
import DemoComputer from '../components/DemoComputer'
import CanvasLoader from '../components/CanvasLoader'
const ProjecMonitor = () => {
  return (
    <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
    <Canvas>
      <ambientLight intensity={Math.PI} />
      <directionalLight position={[10, 10, 5]} />
      <Center>
        <Suspense fallback={<CanvasLoader />}>
          <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
            <DemoComputer texture='/textures/project/project3.mp4' />
          </group>
        </Suspense>
      </Center>
      <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
    </Canvas>
  </div>
  )
}

export default ProjecMonitor