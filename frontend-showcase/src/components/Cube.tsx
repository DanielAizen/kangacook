import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Color, Mesh, MeshStandardMaterial } from "three";

const Cube = () => {
  const meshRef = useRef<Mesh>(null);
  const [clicked, setClicked] = useState(false);
  const colorRef = useRef(new Color('orange'));
  const targetColor = useRef(new Color('blue'));


  // Rotate the cube and change color
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      
      const material = meshRef.current.material;
      if (material instanceof MeshStandardMaterial) {
        colorRef.current.lerp(targetColor.current, 0.1);
        material.color.copy(colorRef.current);
      }
    }
  });

  const handleClick = () => {
    setClicked(!clicked);
    // Switch between orange and blue
    targetColor.current.set(clicked ? 'orange' : 'blue');
  };

  return (
    <mesh
      ref={meshRef}
      onClick={handleClick}
      onPointerOver={() => meshRef.current?.scale.set(1.15, 1.15, 1.15)}
      onPointerOut={() => meshRef.current?.scale.set(1, 1, 1)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  );
};

export default Cube;
