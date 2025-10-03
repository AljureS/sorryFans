'use client';
import Image from 'next/image';

interface ResponsiveImageProps {
  desktopUrl: string;
  mobileUrl: string;
  alt?: string;
}

export default function ResponsiveImage({ desktopUrl, mobileUrl, alt = '' }: ResponsiveImageProps) {
  return (
    <div className="w-full">
      <Image
        src={desktopUrl}
        alt={alt}
        width={1920}
        height={600}
        className="hidden md:block w-full h-auto"
        priority
      />
      <Image
        src={mobileUrl}
        alt={alt}
        width={768}
        height={400}
        className="block md:hidden w-full h-auto"
        priority
      />
    </div>
  );
}
