"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FallingImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  delay: number;
  duration: number;
  startX: number;
}

const FallingImage: React.FC<FallingImageProps> = ({ src, alt, width, height, delay, duration, startX }) => {
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);
  }, []);

  return (
    <motion.div
      style={{
        position: 'absolute',
        left: startX,
        top: -height,
      }}
      initial={{ y: -height, opacity: 1 }}
      animate={{ y: windowHeight + height, opacity: [1, 1, 0] }}
      transition={{ 
        type: 'tween', 
        ease: 'easeIn',
        delay,
        duration,
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </motion.div>
  );
};

interface FallingImagesProps {
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  count: number;
}

const FallingImages: React.FC<FallingImagesProps> = ({ imageSrc, imageAlt, imageWidth, imageHeight, count }) => {
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100vh', overflow: 'hidden', pointerEvents: 'none' }}>
      {Array.from({ length: count }).map((_, index) => (
        <FallingImage
          key={index}
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          delay={Math.random() * 2} // Random delay between 0 and 2 seconds
          duration={3 + Math.random() * 2} // Duration between 3 and 5 seconds
          startX={Math.random() * (windowDimensions.width - imageWidth)}
        />
      ))}
    </div>
  );
};

export default FallingImages;
