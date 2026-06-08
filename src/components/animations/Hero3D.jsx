import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

const Hero3D = () => {
  const containerRef = useRef(null)
  const sceneRef = useRef(null)
  const cameraRef = useRef(null)
  const rendererRef = useRef(null)
  const meshRef = useRef(null)
  const ringRef = useRef(null)
  const orbitRefs = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const width = containerRef.current.clientWidth
    const height = containerRef.current.clientHeight

    const scene = new THREE.Scene()
    sceneRef.current = scene

    const camera = new THREE.PerspectiveCamera(48, width / height, 0.1, 1000)
    camera.position.set(0, 0, 4)
    cameraRef.current = camera

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(window.devicePixelRatio)
    renderer.setSize(width, height)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    const coreGeometry = new THREE.IcosahedronGeometry(1.3, 4)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x6366f1,
      emissive: 0x2e026d,
      roughness: 0.2,
      metalness: 0.75,
      transparent: true,
      opacity: 0.95,
      clearcoat: 0.5,
      clearcoatRoughness: 0.1,
    })
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(coreMesh)
    meshRef.current = coreMesh

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45)
    scene.add(ambientLight)

    const mainLight = new THREE.PointLight(0x7c3aed, 1.2, 10)
    mainLight.position.set(3, 2, 4)
    scene.add(mainLight)

    const fillLight = new THREE.PointLight(0x38bdf8, 0.55, 10)
    fillLight.position.set(-4, -2, 3)
    scene.add(fillLight)

    const ringGeometry = new THREE.TorusGeometry(1.9, 0.03, 16, 120)
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x7c3aed,
      transparent: true,
      opacity: 0.25,
    })
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial)
    ringMesh.rotation.x = Math.PI / 2
    scene.add(ringMesh)
    ringRef.current = ringMesh

    const orbitGeometry = new THREE.SphereGeometry(0.08, 16, 16)
    const orbitMaterial1 = new THREE.MeshBasicMaterial({ color: 0x38bdf8 })
    const orbitMaterial2 = new THREE.MeshBasicMaterial({ color: 0xe879f9 })

    const orbitMesh1 = new THREE.Mesh(orbitGeometry, orbitMaterial1)
    const orbitMesh2 = new THREE.Mesh(orbitGeometry, orbitMaterial2)
    scene.add(orbitMesh1)
    scene.add(orbitMesh2)
    orbitRefs.current = [orbitMesh1, orbitMesh2]

    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / width) * 2 - 1
      mouseRef.current.y = -(event.clientY / height) * 2 + 1
    }

    const handleResize = () => {
      const newWidth = containerRef.current?.clientWidth || width
      const newHeight = containerRef.current?.clientHeight || height
      camera.aspect = newWidth / newHeight
      camera.updateProjectionMatrix()
      renderer.setSize(newWidth, newHeight)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)

    let frameId
    const animate = () => {
      frameId = requestAnimationFrame(animate)
      const time = performance.now() * 0.001

      coreMesh.rotation.x += 0.0012
      coreMesh.rotation.y += 0.0025
      coreMesh.rotation.z += 0.0008

      coreMesh.rotation.x += (mouseRef.current.y * 0.6 - coreMesh.rotation.x) * 0.04
      coreMesh.rotation.y += (mouseRef.current.x * 0.6 - coreMesh.rotation.y) * 0.04

      ringMesh.rotation.z = time * 0.18
      ringMesh.position.y = Math.sin(time * 0.8) * 0.05

      orbitMesh1.position.set(Math.cos(time * 1.6) * 2.2, Math.sin(time * 1.6) * 0.9, Math.sin(time * 1.6) * 1.4)
      orbitMesh2.position.set(Math.cos(time * 1.1 + 1.5) * 1.7, Math.sin(time * 1.1 + 1.5) * 1.2, Math.cos(time * 1.1 + 1.5) * 1.1)

      renderer.render(scene, camera)
    }

    animate()
    setIsLoaded(true)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frameId)
      containerRef.current?.removeChild(renderer.domElement)
      coreGeometry.dispose()
      coreMaterial.dispose()
      ringGeometry.dispose()
      ringMaterial.dispose()
      orbitGeometry.dispose()
      orbitMaterial1.dispose()
      orbitMaterial2.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="w-full h-full rounded-[2rem] overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.6s ease-out' }}
    />
  )
}

export default Hero3D
