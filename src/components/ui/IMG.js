import { useState, useEffect } from 'react';

export default function IMG({ folder, filename, alt }) {
  const [image, setImage] = useState(null);
  useEffect(() => {
    const importIMG = async () => {
      try {
        const newImage = await import(
          `../../assets/images/${folder}/${filename}`
        );
        console.log('NEW IMAGE:', newImage);
        setImage(() => newImage.default);
      } catch (error) {
        console.warn(`Error loading image: ${filename}`, error);
      }
    };

    importIMG();
  }, [folder, filename]);

  return image ? <img src={image} alt={alt} /> : null;
}
