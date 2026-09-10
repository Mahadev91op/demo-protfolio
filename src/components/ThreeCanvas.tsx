"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 6;

    // 2. Renderer setup with high DPI and alpha transparency
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Group for all 3D objects
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 4. Central Geometric Wireframe Core (Icosahedron + Points)
    const geometry = new THREE.IcosahedronGeometry(2, 2);
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x0066ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.8,
    });
    const sphereMesh = new THREE.Mesh(geometry, wireframeMaterial);
    mainGroup.add(sphereMesh);

    // Inner glowing solid mesh
    const innerGeom = new THREE.IcosahedronGeometry(1.6, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.18,
      roughness: 0.2,
      transmission: 0.8,
      thickness: 1.2,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    mainGroup.add(innerMesh);

    // 5. Outer Orbiting Tech Rings
    const ringGeom = new THREE.TorusGeometry(2.8, 0.025, 16, 100);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0x0052cc,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeom, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    mainGroup.add(ring1);

    const ringGeom2 = new THREE.TorusGeometry(3.2, 0.02, 16, 100);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0x00b4d8,
      transparent: true,
      opacity: 0.4,
    });
    const ring2 = new THREE.Mesh(ringGeom2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.x = -Math.PI / 6;
    mainGroup.add(ring2);

    // 6. Floating Particle Field (Blue & Cyan dust)
    const particleCount = 700;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const blueColor = new THREE.Color(0x0066ff);
    const cyanColor = new THREE.Color(0x38bdf8);
    const navyColor = new THREE.Color(0x1d4ed8);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      particlePositions[i3] = (Math.random() - 0.5) * 16;
      particlePositions[i3 + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i3 + 2] = (Math.random() - 0.5) * 12;

      const randomColor = Math.random() > 0.6 ? cyanColor : Math.random() > 0.3 ? blueColor : navyColor;
      particleColors[i3] = randomColor.r;
      particleColors[i3 + 1] = randomColor.g;
      particleColors[i3 + 2] = randomColor.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.NormalBlending,
    });

    const particles = new THREE.Points(particleGeom, particleMaterial);
    scene.add(particles);

    // 7. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x0066ff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00d2ff, 1.8);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    // 8. Mouse parallax tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.7;
      targetMouseY = y * 0.7;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 9. GSAP ScrollTrigger linking
    const scrollAnimation = ScrollTrigger.create({
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5,
      onUpdate: (self) => {
        const progress = self.progress;
        mainGroup.rotation.y = progress * Math.PI * 4;
        mainGroup.rotation.x = progress * Math.PI * 2;
        mainGroup.position.y = -progress * 2.5;
        particles.rotation.y = progress * Math.PI * 1.5;
      },
    });

    // 10. Animation render loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Subtle continuous idle rotation
      sphereMesh.rotation.y += 0.003;
      sphereMesh.rotation.x += 0.002;

      ring1.rotation.z += 0.005;
      ring2.rotation.z -= 0.004;

      particles.rotation.y = elapsedTime * 0.03;
      particles.rotation.x = elapsedTime * 0.015;

      // Apply mouse parallax to group
      mainGroup.position.x = currentMouseX * 0.8;
      mainGroup.position.z = currentMouseY * 0.5;
      mainGroup.rotation.z = currentMouseX * 0.3;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 11. Responsive resize listener
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener("resize", handleResize);

    // 12. Cleanup
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", handleResize);
      scrollAnimation.kill();
      cancelAnimationFrame(animationFrameId);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      geometry.dispose();
      wireframeMaterial.dispose();
      innerGeom.dispose();
      innerMat.dispose();
      ringGeom.dispose();
      ringMat1.dispose();
      ringGeom2.dispose();
      ringMat2.dispose();
      particleGeom.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}
