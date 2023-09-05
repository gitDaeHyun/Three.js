'use client'

import { useRef,useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import {useControls} from 'leva';
import { Box,OrbitControls } from "@react-three/drei";
import * as THREE from "three";


function MyBox(props : any) {
    const geom = new THREE.BoxGeometry()
    return <mesh {...props} geometry={geom}>
        </mesh>
}


function MyElement3D() {
    // Drei : R3F에서 사용할 수 있는 유용한 컴포넌트들을 모아놓은 라이브러리.
    // npm i @react-three/drei


    const refMesh = useRef<any>();
    const refWireMesh = useRef<any>();
    // useFrame((state,delta : number) => {
    //     refMesh.current.rotation.y += delta
    // })
    const {xSize,ySize,zSize,xSegments,ySegments,zSegments} =  useControls({
        xSize : {value : 1, min : 0.1, max : 5, step : 0.01},
        ySize : {value : 1, min : 0.1, max : 5, step : 0.01},
        zSize : {value : 1, min : 0.1, max : 5, step : 0.01},
        xSegments : {value : 1, min : 1, max : 10, step : 1},
        ySegments : {value : 1, min : 1, max : 10, step : 1},
        zSegments : {value : 1, min : 1, max : 10, step : 1},

    });
    useEffect(() => {
        if (refWireMesh.current && refMesh.current) {
            refWireMesh.current.geometry = refMesh.current.geometry
        }
    }, [xSize,ySize,zSize,xSegments,ySegments,zSegments])
    return (
        <>
            {/* <directionalLight position={[1,1,1]} />

            <axesHelper scale={10}/> */}
            <OrbitControls />
            {/* <mesh ref={refMesh} position-y ={2} 
                rotation-z={THREE.MathUtils.degToRad(45)}
                scale={[2,1,1]}
                >
                <boxGeometry />
                <meshStandardMaterial color="#e67e22" opacity={0.5} transparent={true}/>
                <axesHelper /> */}
            <ambientLight intensity={0.1} />
            <directionalLight position={[2,1,3]} intensity={0.5} />
                <Box ref={refMesh}>
                <boxGeometry args={[xSize,ySize,zSize,xSegments,ySegments,zSegments]}/>
                    <meshStandardMaterial color="white"  emissive="#e74c3c" wireframe={true} />
                    {/* <axesHelper scale={5} /> */}
                </Box>

                <Box position={[1.2,0,0]}>
                    <meshStandardMaterial color="#8e44ad" />
                </Box>
                
                <MyBox ref={refWireMesh} position={[1.2,0,0]}>
                    <meshStandardMaterial emissive="#e74c3c" wireframe={true} />
                </MyBox>
        </>
    )
}

export default MyElement3D