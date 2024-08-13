import './DotsOverlay.css';
import { useEffect, useRef } from 'react';
import { useWindowSize } from '@react-hook/window-size/throttled';
import Dot from './Dot';

export default function DotsOverlay() {
  const [width, height] = useWindowSize();
  const gridRef = useRef(null);
  const dotSize = 7;
  const gutterSize = 14;

  const numCols = Math.ceil(width / (dotSize + gutterSize));
  const numRows = Math.ceil(height / (dotSize + gutterSize));

  useEffect(() => {
    const { current } = gridRef;
    current.style.setProperty('--dot-size', `${dotSize}px`);
    current.style.setProperty('--gutter', `${gutterSize}px`);
    current.style.setProperty('--num-rows', numRows);
    current.style.setProperty('--num-cols', numCols);
  }, [numRows, numCols]);

  return (
    <div id='dots-bg' ref={gridRef}>
      {Array(numRows)
        .fill(null)
        .map((_row, row) =>
          Array(numCols)
            .fill(null)
            .map((_col, col) => (
              <Dot col={col} row={row} key={`dot-${row}-${col}`} />
            ))
        )}
    </div>
  );
}
