import './ParticlesBG.css';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Particle from './Particle';

export default function ParticlesBG() {
  const [width, height] = useWindowSize();
  const gridRef = useRef(null);
  const particleSize = 10;
  const gutterSize = 5;

  const numCols = Math.ceil(width / (particleSize + gutterSize));
  const numRows = Math.ceil(height / (particleSize + gutterSize));

  useEffect(() => {
    const { current } = gridRef;
    current.style.setProperty('--p-size', `${particleSize}px`);
    current.style.setProperty('--gutter', `${gutterSize}px`);
    current.style.setProperty('--num-rows', numRows);
    current.style.setProperty('--num-cols', numCols);
  }, [numRows, numCols]);

  return (
    <div id='particles-bg' ref={gridRef}>
      {Array(numRows)
        .fill(null)
        .map((_row, row) => (
          <div className='particle-row' key={`p-row-${row}`}>
            {Array(numCols)
              .fill(null)
              .map((_col, col) => (
                <Particle col={col} row={row} key={`p-${row}-${col}`} />
              ))}
          </div>
        ))}
    </div>
  );
}
