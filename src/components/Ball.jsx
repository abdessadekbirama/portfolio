import { Float, OrbitControls, useGLTF} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const IconCanvas = (props)=>{
    const ball = useGLTF(props.model);
    return(
        <Float floatIntensity={2} speed={3}>
            <mesh>
                <directionalLight position={[0.5,0,1]}/>
                <primitive object={ball.scene} scale={1.5} rotation={[0,-1.2,0]}/>
            </mesh>
        </Float>
    )
}

function Ball(props){
    return(
        <div className="size-32">
            <Canvas className="">
            <IconCanvas model={props.model}/>
            <OrbitControls enableZoom={false}/>
            </Canvas>
        </div>
    )
}

export default Ball;