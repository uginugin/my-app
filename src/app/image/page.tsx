'use client';
import Image from 'next/image';
import { useLayoutEffect, useRef, useState, type ElementRef } from 'react';

export default function Home() {
  const [svgWidthHeight, setSvgWidthHeight] = useState({ width: 0, height: 0 });

  const imageRef = useRef<ElementRef<'img'>>(null);

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      console.log('resized');
      const { width, height } = entries[0].contentRect;
      setSvgWidthHeight({ width, height });
    });

    const imgRef = imageRef.current;

    if (imgRef) {
      resizeObserver.observe(imgRef);
    }

    return () => {
      if (imgRef) {
        resizeObserver.unobserve(imgRef);
      }
    };
  }, []);

  return (
    <div className='h-[600px] aspect-[1/6] bg-red-500'>
      {/* // <div className='w-[600px] aspect-[6/1] bg-red-500'> */}
      <div className='flex w-full h-full items-center justify-center relative'>
        <div
          className='absolute bg-orange-300 opacity-50'
          style={{ width: svgWidthHeight.width, height: svgWidthHeight.height }}
        />
        <Image
          ref={imageRef}
          src='/png-clipart-person-computer-icons-stick-figure-free-content-free-animated-s-website-stockxchng.png'
          alt=''
          width={600}
          height={100}
          className='max-h-full w-auto rounded-full'
        />
      </div>
    </div>
  );
}
