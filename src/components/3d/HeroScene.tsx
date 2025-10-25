'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Stars, PerspectiveCamera, Float, MeshDistortMaterial } from '@react-three/drei';
import * as random from 'maath/random';
import { Vector3, Color, AdditiveBlending, Points as ThreePoints, Mesh, MeshStandardMaterial } from 'three';
import { CircuitFab } from '../models/CircuitFab';

const getDeviceConfig = () => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isDesktop: true };
  }
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isDesktop = width >= 768;
  return { isMobile, isDesktop };
};

const getParticleCount = () => {
  const { isMobile } = getDeviceConfig();
  return isMobile ? 1500 : 5000;
};

const PRIMARY_COLOR = '#0f4c81';
const SECONDARY_COLOR = '#57a0d3';
const PARTICLE_SPEED = 0.15;
const CURL_STRENGTH = 0.08;
const MOUSE_INFLUENCE = 0.3;
const ATTRACTION_POINT = new Vector3(1.5, -2, 0);
const SPAWN_RADIUS = 4.5;
const RESET_RADIUS = 1.5;

interface MousePosition {
  x: number;
  y: number;
}

interface ParticleSwarmProps {
  mousePosition: MousePosition;
  numParticles: number;
}

const ParticleSwarm: React.FC<ParticleSwarmProps> = ({ mousePosition, numParticles }) => {
  const pointsRef = useRef<ThreePoints>(null);
  const { viewport } = useThree();

  const particleVector = useMemo(() => new Vector3(), []);
  const attractorVector = useMemo(() => new Vector3(), []);
  const mouseVector = useMemo(() => new Vector3(), []);

  const { positions, colors } = useMemo(() => {
    const tempPositions = new Float32Array(numParticles * 3);
    const tempColors = new Float32Array(numParticles * 3);
    const colorA = new Color(PRIMARY_COLOR);
    const colorB = new Color(SECONDARY_COLOR);

    for (let i = 0; i < numParticles; i++) {
      const [x, y, z] = random.inSphere(new Float32Array(3), { radius: SPAWN_RADIUS });
      tempPositions.set([x, y, z], i * 3);
      
      const color = colorA.clone().lerp(colorB, Math.random());
      tempColors.set([color.r, color.g, color.b], i * 3);
    }
    return { positions: tempPositions, colors: tempColors };
  }, [numParticles]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;

    const currentPositions = pointsRef.current.geometry.attributes.position.array as Float32Array;

    mouseVector.set(
      mousePosition.x * viewport.width * 0.5,
      mousePosition.y * viewport.height * 0.5,
      0
    );

    attractorVector.copy(ATTRACTION_POINT).add(mouseVector.multiplyScalar(MOUSE_INFLUENCE));

    for (let i = 0; i < numParticles; i++) {
      const i3 = i * 3;
      particleVector.set(currentPositions[i3], currentPositions[i3 + 1], currentPositions[i3 + 2]);
      
      const direction = attractorVector.clone().sub(particleVector);
      const distance = direction.length();
      direction.normalize();
      
      const speed = PARTICLE_SPEED * (1 + distance * 0.1);
      particleVector.add(direction.multiplyScalar(speed));

      const time = state.clock.elapsedTime;
      const curlX = Math.sin(particleVector.y * 0.5 + time * 0.5) * CURL_STRENGTH;
      const curlY = Math.cos(particleVector.x * 0.5 + time * 0.5) * CURL_STRENGTH;
      const curlZ = Math.sin(particleVector.z * 0.5 + time * 0.3) * CURL_STRENGTH;
      
      particleVector.x += curlX * delta * 100;
      particleVector.y += curlY * delta * 100;
      particleVector.z += curlZ * delta * 100;

      const angle = Math.atan2(particleVector.y - attractorVector.y, particleVector.x - attractorVector.x);
      const spiralSpeed = 0.025 * delta * 100;
      particleVector.x += Math.cos(angle + Math.PI / 2) * spiralSpeed;
      particleVector.y += Math.sin(angle + Math.PI / 2) * spiralSpeed;

      if (particleVector.distanceTo(attractorVector) < RESET_RADIUS) {
        const [nx, ny, nz] = random.inSphere(new Float32Array(3), { radius: SPAWN_RADIUS });
        particleVector.set(nx, ny, nz);
      }

      currentPositions[i3] = particleVector.x;
      currentPositions[i3 + 1] = particleVector.y;
      currentPositions[i3 + 2] = particleVector.z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.018}
        sizeAttenuation={true}
        depthWrite={false}
        blending={AdditiveBlending}
        opacity={0.9}
      />
    </Points>
  );
};

const InteractiveSphere: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    const time = state.clock.elapsedTime;
    
    meshRef.current.rotation.x = time * 0.4;
    meshRef.current.rotation.y = time * 0.6;
    
    meshRef.current.position.x = -3.5 + Math.sin(time * 0.4) * 0.5;
    meshRef.current.position.y = Math.sin(time * 0.3) * 6;
    meshRef.current.position.z = Math.cos(time * 0.3) * 5 - 1;
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[0.6, 2]} />
      <meshStandardMaterial
        color={SECONDARY_COLOR}
        roughness={0.1}
        metalness={0.95}
        emissive={PRIMARY_COLOR}
        emissiveIntensity={0.6}
        wireframe={false}
        flatShading={true}
      />
    </mesh>
  );
};

const CameraRig: React.FC = () => {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.3;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.12) * 0.3;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export const HeroScene: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [deviceConfig, setDeviceConfig] = useState({ isMobile: false, isDesktop: true });
  const [numParticles, setNumParticles] = useState(5000);

  useEffect(() => {
    const config = getDeviceConfig();
    setDeviceConfig(config);
    setNumParticles(getParticleCount());

    const handleResize = () => {
      const newConfig = getDeviceConfig();
      setDeviceConfig(newConfig);
      setNumParticles(getParticleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const starCount = deviceConfig.isMobile ? 1500 : 4000;

  return (
    <div className="h-full w-full">
      <Canvas 
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 75 }} 
        className="h-full w-full"
        gl={{ 
          alpha: true, 
          antialias: !deviceConfig.isMobile,
          powerPreference: deviceConfig.isMobile ? 'low-power' : 'high-performance'
        }}
        dpr={deviceConfig.isMobile ? [1, 1.5] : [1, 2]}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, 0, 2]} intensity={2} color={SECONDARY_COLOR} />
        <pointLight position={[3, -2, 3]} intensity={1.5} color={PRIMARY_COLOR} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={starCount}
          factor={deviceConfig.isMobile ? 3 : 5}
          saturation={0} 
          fade 
          speed={0.5}
        />

        {deviceConfig.isDesktop && <InteractiveSphere />}
        
        <ParticleSwarm mousePosition={mousePosition} numParticles={numParticles} />
        
        {deviceConfig.isDesktop && (
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
            <group position={[3.5, -2.5, -0.5]} rotation={[0.3, -0.8, 0.1]} scale={50}>
              <CircuitFab />
              <hemisphereLight intensity={1.5} groundColor="#000000" color="#ffffff" />
            </group>
          </Float>
        )}
        
        {deviceConfig.isMobile && (
          <group position={[2.5, -1.5, -1]} rotation={[0.3, -0.8, 0.1]} scale={30}>
            <CircuitFab />
          </group>
        )}

        {deviceConfig.isDesktop && <CameraRig />}
      </Canvas>
    </div>
  );
};

export default HeroScene;
