import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import Menu from './StaticComponents/Menu';

import Untitled from './ModelComponent/Untitled';
import './App.css';


export default function App() {

  return (
    <div className="App">
      <Menu />
      <Canvas
          camera={{
            position: [6, 6, 6],
            fov: 15,
            far: 1000
          }}
          style={{
            backgroundColor: '#0f1013',
            width: '100vw',
            height: '100vh',
          }}
      >
          <pointLight position={[3, 3, 3]} />
          <ambientLight />
          <Suspense fallback={null}>
              <Untitled position={[2, -0.4, 0]} onClick={()=>alert('Untitled')}/>
              <Stars saturation={true} count={40000} speed={2} />
          </Suspense>
          <OrbitControls />
      </Canvas>
    </div>
  );
}
