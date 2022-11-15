import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import Model from './ModelComponent/Model';

import logo from './logo.svg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Canvas
          camera={{ position: [2, 0, 12.25], fov: 15 }}
          style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
          }}
      >
          <ambientLight intensity={1.25} />
          <ambientLight intensity={0.1} />
          <directionalLight intensity={0.4} />
          <Suspense fallback={null}>
              <Model position={[0.025, -0.9, 0]} onClick={()=>alert('you can click here using a props onClick too')}/>
              <Stars saturation={true} count={40000} speed={2} />
          </Suspense>
          <OrbitControls />
          <EffectComposer>
            <Bloom mipmapBlur luminanceThreshold={1} />
          </EffectComposer>
      </Canvas>
    </div>
  );
}
