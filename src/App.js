import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import {Happy} from './Happy'


function App() {

  return (
    <div className='back'>
      <Canvas  shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        <ambientLight intensity={0.8}/>
        <spotLight position={[0.5, 2, 0.5]} angle={0.5} penumbra={2} />
        <pointLight position={[0, 1, 2]} intensity={3} />
        <pointLight position={[1, 1, 1]} />
        <Happy />
        <OrbitControls />
        <axesHelper />
      </Canvas>
    </div>
  );
}

export default App;
