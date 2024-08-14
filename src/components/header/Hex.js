import './Hex.css';
import { useEffect, useRef } from 'react';
import { ReactComponent as SvgIcon } from '../../assets/images/hex.svg';

export default function Hex({ row, col, width, height }) {
  const ref = useRef(null);
  const delay = Math.floor(Math.random() * 50) / 40;
  useEffect(() => {
    const { current } = ref;
    current.style.setProperty('--delay', delay + 's');
  });

  return <SvgIcon className='hex' ref={ref} width={width} height={height} />;
}
