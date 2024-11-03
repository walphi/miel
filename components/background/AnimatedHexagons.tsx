'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AnimatedHexagons() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const hexagonGeometry = new THREE.CircleGeometry(0.1, 6);
    const particles = 500;

    const geometry = new THREE.InstancedBufferGeometry();
    geometry.instanceCount = particles;
    geometry.setAttribute('position', hexagonGeometry.getAttribute('position'));
    geometry.index = hexagonGeometry.index;

    const positions = new Float32Array(particles * 3);
    const colors = new Float32Array(particles * 3);
    const scales = new Float32Array(particles);

    const color1 = new THREE.Color('#F36523');
    const color2 = new THREE.Color('#F4BFA7');

    for (let i = 0; i < particles; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const mixedColor = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;

      scales[i] = Math.random() * 0.5 + 0.5;
    }

    geometry.setAttribute('instancePosition', new THREE.InstancedBufferAttribute(positions, 3));
    geometry.setAttribute('instanceColor', new THREE.InstancedBufferAttribute(colors, 3));
    geometry.setAttribute('instanceScale', new THREE.InstancedBufferAttribute(scales, 1));

    const material = new THREE.ShaderMaterial({
      vertexShader: `
        attribute vec3 instancePosition;
        attribute vec3 instanceColor;
        attribute float instanceScale;
        varying vec3 vColor;

        void main() {
          vColor = instanceColor;
          
          float angle = 3.14159 / 6.0;
          mat2 rotationMatrix = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
          
          vec2 rotatedPosition = rotationMatrix * position.xy;
          
          vec4 mvPosition = modelViewMatrix * vec4(instancePosition, 1.0);
          mvPosition.xy += rotatedPosition * instanceScale;
          mvPosition.z += position.z * instanceScale;
          
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          gl_FragColor = vec4(vColor, 0.5);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const particles_system = new THREE.Mesh(geometry, material);
    scene.add(particles_system);

    camera.position.z = 5;

    function animate() {
      requestAnimationFrame(animate);
      particles_system.rotation.x += 0.0005;
      particles_system.rotation.y += 0.001;
      renderer.render(scene, camera);
    }

    function handleResize() {
      if (!canvasRef.current) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />;
}