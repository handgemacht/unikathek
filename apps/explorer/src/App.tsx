import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

import { Viewport3DTest } from './Viewport3DTest';

import { fetchCulturalObjects } from '@repo/lib';
import type { CulturalObject } from '@repo/types';
import { ObjectCardTest } from './ObjectCardTest';

import './App.css';

function App() {
  const [objects, setObjects] = useState<CulturalObject[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchCulturalObjects()
      .then(setObjects)
      .catch(console.error);
  }, []);

  const prev = () => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : objects.length - 1));
  };

  const next = () => {
    setCurrentIndex((i) => (i < objects.length - 1 ? i + 1 : 0));
  };

  const currentObject = objects[currentIndex];

  return (
    <>
      <div className="w-screen flex flex-col items-center justify-center bg-gray-100">
        {currentObject && <ObjectCardTest object={currentObject} />}
        <div className="mb-4 flex gap-4">
          <button onClick={prev} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            ◀ Zurück
          </button>
          <div>{currentIndex}/{objects.length}</div>
          <button onClick={next} className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400">
            Weiter ▶
          </button>
        </div>
      </div>

      <div className="w-screen h-screen">
        <Canvas>
          <ambientLight />
          <Viewport3DTest />
        </Canvas>
      </div>
    </>
  );
}

export default App;
