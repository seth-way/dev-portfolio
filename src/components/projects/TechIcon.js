import './TechIcon.css';
import { useState, useEffect } from 'react';

export default function TechIcon({ tech }) {
  const [SVG, setSVG] = useState(null);

  useEffect(() => {
    const importSVG = async () => {
      const techSVG = await import(`../../assets/images/tech/${tech}.svg`);
      console.log('1:', techSVG);
      console.log('default:', techSVG.default);
      setSVG(() => techSVG.default);
      console.log('svg set...');
    };

    importSVG();
  }, [tech]);

  return SVG ? <SVG /> : null;
}
