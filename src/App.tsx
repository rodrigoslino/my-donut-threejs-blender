import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./donut.gltf");
  return <primitive object={gltf.scene} scale={35} />;
};

function App() {
  return (
    <div className="App">
      Play with my 3D donut please!
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
