import Image from 'next/image';
import { memo } from 'react';

interface EventCardProps {
  title: string;
  line1: string;
  line2: string;
  imgUrl: string;
  buttonText: string;
  url: string;
}

function EventCard({ title, line1, line2, imgUrl, buttonText, url }: EventCardProps) {
  return (
    <div className="grid_element">
      <div className="image_container">
        <Image
          src={imgUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto"
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="information">
        <div className="details">
          <strong>{title}</strong>
          <strong>{line1}</strong>
          <span>{line2}</span>
        </div>
        <span className="grid_link" >
          <a href={url} target="_blank" rel="noopener noreferrer">{buttonText}</a>
        </span>
      </div>
    </div>
  );
}

export default memo(EventCard);
