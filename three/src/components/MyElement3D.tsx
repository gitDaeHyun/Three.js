'use client'

import { useRef } from "react";
import { useFrame } from "@react-three/fiber"
function MyElement3D() {
    const refMesh = useRef<any>();
    useFrame((state,delta : number) => {
        refMesh.current.rotation.y += delta
    })
    return (
        <>
            <directionalLight position={[1,1,1]} />
            <mesh ref={refMesh} rotation = {[0,45*Math.PI/180,0]}>
                <boxGeometry />
                <meshStandardMaterial color="#e67e22" />
            </mesh>
        </>
    )
}

export default MyElement3D