/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Flag(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/flag.glb')
  const { actions } = useAnimations(animations, group)


  useEffect(()=>{

    //actions.left.play();
    //actions.right.startAt(2)
    //actions.right.play()
    setInterval(()=>{

      if(window.left === 1) {
        actions.left.play();
      }
      if(window.left === 0) {
        actions.left.stop();
      }
      if(window.right === 1) {
        actions.right.play();
      }
      if(window.right === 0) {
        actions.right.stop();
      }

    }, 1000)

  }, [])

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

useGLTF.preload('/flag.glb')
