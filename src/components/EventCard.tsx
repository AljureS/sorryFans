import Image from 'next/image';

interface EventCardProps {
  title: string;
  line1: string;
  line2: string;
  imgUrl: string;
  buttonText: string;
  url: string;
}

export default function EventCard({ title, line1, line2, imgUrl, buttonText, url }: EventCardProps) {
  return (
    <div className="grid_element">
      <div className="image_container">
        <Image
          src={imgUrl}
          alt={title}
          width={400}
          height={300}
          className="w-full h-auto"
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
