import './TechIcon.css';
import { useState, useEffect } from 'react';

export default function TechIcon({ tech }) {
  const [SVG, setSVG] = useState(null);

  useEffect(() => {
    const importSVG = async () => {
      try {
        const techSVG = await import(`../../assets/images/tech/${tech}.svg`);
        setSVG(() => techSVG.default);
      } catch (error) {
        console.warn(`Error loading SVG: ${tech}.svg`, error);
      }
    };

    importSVG();
  }, [tech]);

  return SVG ? <img src={SVG} alt={tech} /> : null;
}
