"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function ParticleSwarm() {
  const ref = useRef(null);

  // Menggunakan Float32Array untuk alokasi memori mentah GPU (sangat cepat)
  // Membuat 600 titik partikel acak dalam ruang 3D
  const count = 600;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 5; // Menyebar partikel di radius koordinat -2.5 sampai 2.5
    }
    return pos;
  }, []);

  // useFrame adalah loop animasi bawaan Three.js (menggantikan requestAnimationFrame)
  useFrame((state) => {
    if (!ref.current) return;

    // AMBIL DATA WAKTU LANGSUNG DARI STATE.CLOCK (Aman, optimal, dan bebas warning)
    const elapsedTime = state.clock.getElapsedTime();

    // 1. Rotasi otomatis yang sangat tenang seiring berjalannya waktu
    ref.current.rotation.y = elapsedTime * 0.03;
    ref.current.rotation.x = elapsedTime * 0.01;

    // 2. Interaksi Parallax Mouse: Partikel bergeser mengikuti arah kursor
    const targetX = state.pointer.x * 0.3;
    const targetY = state.pointer.y * 0.3;

    // Easing linear halus (lerp) agar pergeseran mouse terasa mewah dan organik
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#d4af37" // Aksen warna emas portfolio kamu
          size={0.035} // Ukuran partikel murni berbasis WebGL
          sizeAttenuation={true} // Membuat partikel mengecil jika jaraknya menjauh dari kamera
          depthWrite={false}
          blending={threeBlending} // Efek berpijar saat partikel saling bertumpuk
        />
      </Points>
    </group>
  );
}

// Fallback aman untuk pencampuran pixel WebGL (Additive Blending)
const threeBlending = 2; // Nilai enum internal Three.js untuk AdditiveBlending

export default function HeroBackground3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 1.5] }}>
        <ambientLight intensity={0.5} />
        <ParticleSwarm />
      </Canvas>
    </div>
  );
}
