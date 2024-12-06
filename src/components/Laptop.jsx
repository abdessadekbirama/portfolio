import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

function Laptop(){
    const computer = useGLTF("/portfolio/laptop.glb");
    return(
        <mesh>
            <ambientLight intensity={10}/>
            <primitive object={computer.scene} scale={0.02}/>
        </mesh>
    )
}
function LaptopCanvas(){
    return(
        <Canvas style={{height:"400px"}}>
            <Laptop/>
            <OrbitControls
            maxPolarAngle={Math.PI/3}
            minPolarAngle={Math.PI/3}
            autoRotate={true}
            autoRotateSpeed={-10}
            enableZoom={false}
            />
        </Canvas>
    )
}

export default LaptopCanvas;