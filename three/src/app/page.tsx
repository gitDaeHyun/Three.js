'use client'

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;

      const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
      camera.position.set(0, 0, 5);
      
      const controls = new OrbitControls(camera,renderer.domElement);
      // controls.minDistance = 0;
      // controls.maxDistance = 0; 최소 최대 드래그 거리 조정
      // controls.maxPolarAngle -> 최데,최소 앵글 조정

      const loader = new GLTFLoader();
      
      scene.background = new THREE.Color("white");

      loader.load("/shiba/scene.gltf", (gltf) => {
        scene.add(gltf.scene);

        function animate()  {
          requestAnimationFrame(animate);
          controls.update()
          gltf.scene.rotation.y += 0.2;
          renderer.render(scene, camera);
        }

        animate();
      });
    }
  }, [canvasRef]);

  return <canvas ref={canvasRef} id="canvas"></canvas>;
}