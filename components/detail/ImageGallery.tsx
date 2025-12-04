'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  
  return (
    <div className="space-y-4">
      <div className="relative w-full h-96 md:h-[500px] rounded-lg overflow-hidden">
        <Image
          src={images[selectedImage]}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 70vw"
        />
      </div>
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`
                relative w-full h-20 rounded overflow-hidden border-2 transition-all
                ${selectedImage === index ? 'border-[var(--color-primary)]' : 'border-transparent hover:border-[var(--color-border)]'}
              `}
            >
              <Image
                src={image}
                alt={`${title} - Image ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 25vw, 15vw"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}



