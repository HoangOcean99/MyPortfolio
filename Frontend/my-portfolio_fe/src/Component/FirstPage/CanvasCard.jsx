import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import { Line2 } from "three/examples/jsm/lines/Line2.js";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";
import './CanvasCard.css'

export default function CanvasCard({ mode, imageUrl = (mode === "dark") ? '/images/ImageCardDark.png' : '/images/ImageCardLight.jpg', cardSize = { w: 3, h: 4, t: 0.12 }, strapLength = -2 }) {
  const mountRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0xffffff);

    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0, 10);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Lights
    const ambient = new THREE.AmbientLight(0xffffff, 1.3);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 2);
    dir.position.set(5, 6, 8);
    scene.add(dir);

    // Card
    const { w, h, t } = cardSize;
    const geo = new RoundedBoxGeometry(w, h, t, 8, 0.18);

    const loader = new THREE.TextureLoader();
    const tex = loader.load(imageUrl);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();

    const mat = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.1 });
    const card = new THREE.Mesh(geo, mat);

    // Hook + Ring
    const hookGeo = new THREE.TorusGeometry(0.2, 0.05, 12, 32, Math.PI);
    const hookMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.7, roughness: 0.4 });
    const hook = new THREE.Mesh(hookGeo, hookMat);
    hook.rotation.x = Math.PI;

    const ringGeo = new THREE.TorusGeometry(0.15, 0.04, 8, 24);
    const ringMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.6, roughness: 0.4 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;

    // Anchors
    const anchorLeft = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), new THREE.MeshBasicMaterial({ color: 0xff0000 }));
    anchorLeft.position.set(-0.6, 3.5, 0);
    scene.add(anchorLeft);

    const anchorRight = new THREE.Mesh(new THREE.SphereGeometry(0.05, 16, 16), new THREE.MeshBasicMaterial({ color: 0x0000ff }));
    anchorRight.position.set(0.6, 3.5, 0);
    scene.add(anchorRight);

    // Swing Group
    const swingGroup = new THREE.Group();
    swingGroup.add(card);
    swingGroup.add(ring);
    swingGroup.add(hook);
    card.position.y = -(h / 2 + 0.1 + strapLength) - 0.05;
    ring.position.y = -strapLength - 0.11;
    hook.position.y = -strapLength + 0.19;
    scene.add(swingGroup);

    // Straps
    const strapMat = new LineMaterial({ color: 0x1a2a1a, linewidth: 40 });
    strapMat.resolution.set(width, height);

    const strapLeft = new Line2(new LineGeometry(), strapMat);
    const strapRight = new Line2(new LineGeometry(), strapMat);
    scene.add(strapLeft);
    scene.add(strapRight);

    // Physics
    let isDragging = false;
    let last = { x: 0, y: 0 };
    const velocity = { x: 0, y: 0, tiltX: 0, tiltZ: 0 };
    const stiffness = 50;
    const damping = 4.0;
    const gravity = 3;
    const sensitivity = 0.004;
    const tiltThreshold = 20;

    function onPointerDown(e) {
      isDragging = true;
      const rect = renderer.domElement.getBoundingClientRect();
      last.x = e.clientX - rect.left;
      last.y = e.clientY - rect.top;
      renderer.domElement.setPointerCapture(e.pointerId || 1);
    }
    function onPointerUp() {
      isDragging = false;
    }
    function onPointerMove(e) {
      const rect = renderer.domElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (isDragging) {
        const dx = x - last.x;
        const dy = y - last.y;

        swingGroup.position.x += dx * 0.01;
        swingGroup.position.y -= dy * 0.01;

        velocity.x = dx * 0.05;
        velocity.y = -dy * 0.05;

        if (Math.abs(dy) > tiltThreshold) {
          swingGroup.rotation.x += dy * sensitivity;
          velocity.tiltX = dy * sensitivity * 10;
        }
        if (Math.abs(dx) > tiltThreshold) {
          swingGroup.rotation.z += dx * sensitivity;
          velocity.tiltZ = dx * sensitivity * 10;
        }
      }
      last.x = x;
      last.y = y;
    }

    renderer.domElement.addEventListener("pointerdown", onPointerDown);
    renderer.domElement.addEventListener("pointerup", onPointerUp);
    renderer.domElement.addEventListener("pointerleave", onPointerUp);
    renderer.domElement.addEventListener("pointermove", onPointerMove);

    // Animate
    const clock = new THREE.Clock();
    function animate() {
      const dt = Math.min(clock.getDelta(), 0.033);

      if (!isDragging) {
        const ax = -stiffness * swingGroup.position.x - damping * velocity.x;
        const ay = -stiffness * swingGroup.position.y - damping * velocity.y - gravity;
        velocity.x += ax * dt;
        velocity.y += ay * dt;
        swingGroup.position.x += velocity.x * dt;
        swingGroup.position.y += velocity.y * dt;

        const atx = -stiffness * swingGroup.rotation.x - damping * velocity.tiltX;
        velocity.tiltX += atx * dt;
        swingGroup.rotation.x += velocity.tiltX * dt;

        const atz = -stiffness * swingGroup.rotation.z - damping * velocity.tiltZ;
        velocity.tiltZ += atz * dt;
        swingGroup.rotation.z += velocity.tiltZ * dt;
      }

      // Update straps
      const hookPos = hook.getWorldPosition(new THREE.Vector3());
      const leftPos = anchorLeft.getWorldPosition(new THREE.Vector3());
      const rightPos = anchorRight.getWorldPosition(new THREE.Vector3());

      function updateStrap(line, start, end, offsetX) {
        const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
        mid.y -= 0.3;
        mid.x += offsetX;
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
        const pts = curve.getPoints(20);
        const flat = pts.flatMap((p) => [p.x, p.y, p.z]);
        line.geometry.setPositions(flat);
        line.geometry.attributes.position.needsUpdate = true;
      }

      updateStrap(strapLeft, leftPos, hookPos.clone().add(new THREE.Vector3(-0.15, 0, 0)), -0.05);
      updateStrap(strapRight, rightPos, hookPos.clone().add(new THREE.Vector3(0.15, 0, 0)), 0.05);

      renderer.render(scene, camera);
      rafRef.current = requestAnimationFrame(animate);
    }
    animate();

    // Handle resize
    function onResize() {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      strapMat.resolution.set(w, h);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", onResize);
      renderer.domElement.removeEventListener("pointerdown", onPointerDown);
      renderer.domElement.removeEventListener("pointerup", onPointerUp);
      renderer.domElement.removeEventListener("pointerleave", onPointerUp);
      renderer.domElement.removeEventListener("pointermove", onPointerMove);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, [imageUrl, cardSize, strapLength]);

  return (
    <div ref={mountRef} className="w-100 h-100 d-flex justify-content-center align-items-center contain-card"></div>
  );
}
