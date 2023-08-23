import { Canvas } from '@react-three/fiber';
import './App.css';
import { OrbitControls } from '@react-three/drei';
import {Happy} from './Happy'
import { Arm2 } from './Arm2';
import { Neck } from './Neck';
import { Squart } from './Squart';
import { Pushup } from './Pushup';
import { Flag } from './Flag';
import { useEffect, useState } from 'react';


function App() {

  const [squart, setSquart] = useState(false);
  const [flag, setFlag] = useState(true);
  const [pushup, setPushup] = useState(false);
  const [neck, setNeck] = useState(false);

  useEffect(()=>{

    setInterval(()=>{

      setFlag(window.flag === 1 ? true : false)
      setSquart(window.squart === 1 ? true : false)
      setPushup(window.pushup === 1 ? true : false)
      setNeck(window.neck === 1 ? true : false)

    }, 1000);

  },[])

  return (
    <div className='back'>
      <Canvas  shadows camera={{ position: [0, 0, 10], fov: 50 }}>
        
          <Flag position={[0, -2, 0]} visible={flag} />
          <Squart position={[0, -2, 0]} visible={squart} />
          <Pushup position={[0, -2, 0]} visible={pushup}/>
          <Neck position={[0, -2, 0]} visible={neck}/>
        
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
