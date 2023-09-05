'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import MyElement3D from '@/components/MyElement3D'
function Practice() {
    return (
        <>
            <Canvas style={{width: "100vw", height: "100vh" }}
                    camera={{
                        aspect: window.innerWidth / window.innerHeight,}}>
                <MyElement3D />
            </Canvas>
        </>
    )
}

export default Practice