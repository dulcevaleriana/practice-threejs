import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import Untitled from './ModelComponent/Untitled';

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
          camera={{
            position: [6, 6, 6],
            fov: 15,
            far: 1000
          }}
          style={{
            backgroundColor: '#111a21',
            width: '100vw',
            height: '100vh',
          }}
      >
          <pointLight position={[2, 2, 2]} />
          <ambientLight intensity={0.25} />
          <directionalLight intensity={0.2} />
          <Suspense fallback={null}>
              <Untitled position={[2, -0.4, 0]} onClick={()=>alert('Untitled')}/>
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
