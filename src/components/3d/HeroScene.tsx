'use client';

import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Stars, PerspectiveCamera, Float, Sparkles } from '@react-three/drei';
import * as random from 'maath/random';
import { Vector3, Color, AdditiveBlending, Points as ThreePoints } from 'three';
import { CircuitFab } from '../models/CircuitFab'; 

// Device detection and performance settings
const getDeviceConfig = () => {
  if (typeof window === 'undefined') {
    return { isMobile: false, isTablet: false, isDesktop: true };
  }
  
  const width = window.innerWidth;
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;
  
  return { isMobile, isTablet, isDesktop };
};

// Performance-based particle counts
const getParticleCount = () => {
  const { isMobile, isTablet } = getDeviceConfig();
  if (isMobile) return 1500; // Reduced significantly for mobile
  if (isTablet) return 3500; // Moderate for tablets
  return 6000; // Full experience for desktop
};

const COLOR_A = '#0f4c81';
const COLOR_B = '#57a0d3';
const PARTICLE_SPEED = 0.15;
const CURL_STRENGTH = 0.08;
const MOUSE_INFLUENCE = 0.25;
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

  const _particle = useMemo(() => new Vector3(), []);
  const _attractor = useMemo(() => new Vector3(), []);
  const _mouse = useMemo(() => new Vector3(), []);

  const { positions, colors } = useMemo(() => {
    const tempPositions = new Float32Array(numParticles * 3);
    const tempColors = new Float32Array(numParticles * 3);
    const colorA = new Color(COLOR_A);
    const colorB = new Color(COLOR_B);

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

    _mouse.set(
      mousePosition.x * viewport.width * 0.5,
      mousePosition.y * viewport.height * 0.5,
      0
    );

    _attractor.copy(ATTRACTION_POINT).add(_mouse.multiplyScalar(MOUSE_INFLUENCE));

    for (let i = 0; i < numParticles; i++) {
      const i3 = i * 3;
      _particle.set(currentPositions[i3], currentPositions[i3 + 1], currentPositions[i3 + 2]);
      
      const direction = _attractor.clone().sub(_particle);
      const distance = direction.length();
      direction.normalize();
      
      const speed = PARTICLE_SPEED * (1 + distance * 0.1);
      _particle.add(direction.multiplyScalar(speed));

      const time = state.clock.elapsedTime;
      const curlX = Math.sin(_particle.y * 0.5 + time * 0.5) * CURL_STRENGTH;
      const curlY = Math.cos(_particle.x * 0.5 + time * 0.5) * CURL_STRENGTH;
      const curlZ = Math.sin(_particle.z * 0.5 + time * 0.3) * CURL_STRENGTH;
      
      // We should multiply by delta to make it frame-rate independent
      _particle.x += curlX * delta * 100; // Scaled up to match original feel
      _particle.y += curlY * delta * 100;
      _particle.z += curlZ * delta * 100;

      const angle = Math.atan2(_particle.y - _attractor.y, _particle.x - _attractor.x);
      const spiralSpeed = 0.025 * delta * 100; // Scaled up
      _particle.x += Math.cos(angle + Math.PI / 2) * spiralSpeed;
      _particle.y += Math.sin(angle + Math.PI / 2) * spiralSpeed;

      if (_particle.distanceTo(_attractor) < RESET_RADIUS) {
        const [nx, ny, nz] = random.inSphere(new Float32Array(3), { radius: SPAWN_RADIUS });
        _particle.set(nx, ny, nz);
      }

      currentPositions[i3] = _particle.x;
      currentPositions[i3 + 1] = _particle.y;
      currentPositions[i3 + 2] = _particle.z;
    }

    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (

    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false} renderOrder={10}>
      <PointMaterial
        transparent
        vertexColors
        size={0.018}
        sizeAttenuation={true}
        depthWrite={false} // Keep false for additive blending
        blending={AdditiveBlending}
        opacity={0.9}
      />
    </Points>
  );
};

const CameraRig: React.FC = () => {
  useFrame((state) => {
    state.camera.position.x = Math.sin(state.clock.elapsedTime * 0.12) * 0.2;
    state.camera.position.y = Math.cos(state.clock.elapsedTime * 0.12) * 0.2;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
};

export const HeroScene: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [deviceConfig, setDeviceConfig] = useState({ isMobile: false, isTablet: false, isDesktop: true });
  const [numParticles, setNumParticles] = useState(6000);

  useEffect(() => {
    // Set device config and particle count on mount
    const config = getDeviceConfig();
    setDeviceConfig(config);
    setNumParticles(getParticleCount());

    // Update on window resize
    const handleResize = () => {
      const newConfig = getDeviceConfig();
      setDeviceConfig(newConfig);
      setNumParticles(getParticleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    // Disable mouse tracking on mobile for better performance
    if (deviceConfig.isMobile) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    setMousePosition({ x, y });
  };

  // Get star count based on device
  const starCount = deviceConfig.isMobile ? 1500 : deviceConfig.isTablet ? 3000 : 5000;
  const sparkleCount = deviceConfig.isMobile ? 20 : deviceConfig.isTablet ? 50 : 80;

  return (
    <div 
      className="h-full w-full pointer-events-auto"
      onMouseMove={handleMouseMove}
    >
      <Canvas 
        frameloop="always"
        camera={{ position: [0, 0, 5], fov: 75 }} 
        className="h-full w-full"
        gl={{ 
          alpha: true, 
          antialias: !deviceConfig.isMobile, // Disable antialiasing on mobile for performance
          powerPreference: deviceConfig.isMobile ? 'low-power' : 'high-performance'
        }}
        shadows={!deviceConfig.isMobile} // Disable shadows on mobile
        dpr={deviceConfig.isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile
      >
        <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />

        <ambientLight intensity={0.6} />
        
        {/* Conditional lighting based on device */}
        {!deviceConfig.isMobile && (
          <>
            <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
            <pointLight position={[3, -2, 3]} intensity={2} color={COLOR_B} />
            <pointLight position={[-2, 1, -1]} intensity={1.2} color={COLOR_A} />
            <spotLight position={[5, 5, 5]} intensity={0.5} angle={0.3} penumbra={1} color="#ffffff" castShadow />
          </>
        )}
        
        {/* Simplified lighting for mobile */}
        {deviceConfig.isMobile && (
          <>
            <directionalLight position={[5, 5, 5]} intensity={0.8} />
            <pointLight position={[3, -2, 3]} intensity={1.5} color={COLOR_B} />
          </>
        )}
        
        <Stars 
          radius={100} 
          depth={50} 
          count={starCount}
          factor={deviceConfig.isMobile ? 3 : 5}
          saturation={0} 
          fade 
          speed={deviceConfig.isMobile ? 0.2 : 0.4}
        />

        {/* Sparkles - reduced or removed on mobile */}
        {!deviceConfig.isMobile && (
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.4}
          >
            <Sparkles
              count={sparkleCount}
              scale={12}
              size={2.5}
              speed={0.4}
              opacity={0.5}
              color={COLOR_B}
              renderOrder={10}
            />
          </Float>
        )}
        
        <ParticleSwarm mousePosition={mousePosition} numParticles={numParticles} />
        
        {/* CircuitFab model - simplified or hidden on mobile */}
        {!deviceConfig.isMobile && (
          <Float
            speed={2}
            rotationIntensity={0.5}
            floatIntensity={0.3}
          >
            <group position={[3.5, -2.5, -0.5]} rotation={[0.3, -0.8, 0.1]} scale={50}>
              <CircuitFab />
              <hemisphereLight intensity={1.5} groundColor="#000000" color="#ffffff" />
            </group>
          </Float>
        )}

        {/* Simplified CircuitFab for tablets */}
        {deviceConfig.isTablet && (
          <Float
            speed={1.5}
            rotationIntensity={0.3}
            floatIntensity={0.2}
          >
            <group position={[3.5, -2.5, -0.5]} rotation={[0.3, -0.8, 0.1]} scale={40}>
              <CircuitFab />
              <hemisphereLight intensity={1.2} groundColor="#000000" color="#ffffff" />
            </group>
          </Float>
        )}

        {/* Only apply camera rig on desktop for smoother performance */}
        {deviceConfig.isDesktop && <CameraRig />}
      </Canvas>
    </div>
  );
};

export default HeroScene;
