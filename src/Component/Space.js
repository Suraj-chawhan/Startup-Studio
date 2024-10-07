

import React,{useRef} from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default  function Model1(props) {
  const { nodes, materials } = useGLTF('/space.glb')

const meshRef=useRef()
  useFrame(()=>{
 meshRef.current.rotation.y+=0.01;
  })

  return (
    <group {...props} dispose={null} ref={meshRef}  position={[0,-2,0]} rotation={[0.4,0,0]}>
      <points geometry={nodes.Object_2.geometry} material={materials['Scene_-_Root']} rotation={[-Math.PI / 2, 0, 0]} scale={0.013} />
    </group>
  )
}

useGLTF.preload('/space.glb')
