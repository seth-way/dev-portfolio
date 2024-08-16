import './HexBG.css';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Hex from './Hex';

export default function HexBG() {
  const [width, height] = useWindowSize();
  const gridRef = useRef(null);
  const scaleFactor = 1;
  const [hexWidth, hexHeight, hexSide] = [100, 100, 40].map(
    original => original * scaleFactor
  );
  const hexOffset = (hexHeight - hexSide) / 2;

  const numCols = Math.ceil(width / hexWidth);
  const numRows = Math.ceil(height / (hexHeight + hexSide)) * 2 + 1;

  useEffect(() => {
    const { current } = gridRef;
    current.style.setProperty('--hex-width', `${hexWidth}px`);
    current.style.setProperty('--hex-height', `${hexHeight}px`);
    current.style.setProperty('--hex-side', `${hexSide}px`);
    current.style.setProperty('--hex-offset', `-${hexOffset}px`);
    current.style.setProperty('--num-rows', numRows);
    current.style.setProperty('--num-cols', numCols);
  }, [numRows, numCols]);

  return (
    <div id='hex-bg' ref={gridRef} aria-hidden='true'>
      {Array(numRows)
        .fill(null)
        .map((_row, row) => (
          <div className='hex-row' key={`h-row-${row}`}>
            {Array(numCols)
              .fill(null)
              .map((_col, col) => (
                <Hex
                  row={row}
                  col={col}
                  width={hexWidth}
                  height={hexHeight}
                  key={`h-${row}-${col}`}
                />
              ))}
          </div>
        ))}
    </div>
  );
}
