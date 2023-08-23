/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/arm2.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.5}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh name="Galaxy" geometry={nodes.Galaxy.geometry} material={materials.galaxy} skeleton={nodes.Galaxy.skeleton} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/arm2.glb')
