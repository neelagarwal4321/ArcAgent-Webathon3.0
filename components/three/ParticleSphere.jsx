import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const mesh = useRef();
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2 + (Math.random() - 0.5) * 0.4;
      pos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (mesh.current) mesh.current.rotation.y += delta * 0.04;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" array={positions} count={count} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#FFFFFF" transparent opacity={0.55} sizeAttenuation />
    </points>
  );
}

export default function ParticleSphere({ particleCount = 2000 }) {
  return (
    <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }} style={{ position: 'absolute', inset: 0 }}>
      <ambientLight intensity={0.5} />
      <Particles count={particleCount} />
    </Canvas>
  );
}
