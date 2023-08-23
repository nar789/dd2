import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import {Happy} from './Happy'
import { Arm2 } from './Arm2';
import { Neck } from './Neck';
import { Squart } from './Squart';
import { Pushup } from './Pushup';


function App() {

  return (
    <div className='back'>
      <Canvas  shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        <Pushup position={[0, 0, 0]} rotation={[0, -Math.PI / 4, -Math.PI / 8]} />
        <ambientLight intensity={0.8}/>
        <spotLight position={[0.5, 2, 0.5]} angle={0.5} penumbra={2} />
        <pointLight position={[0, 1, 2]} intensity={20} />
        <pointLight position={[1, 1, 1]} />
        
        <OrbitControls />
        <axesHelper />
      </Canvas>
    </div>
  );
}

export default App;
