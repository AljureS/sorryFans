import EventCard from './EventCard';

interface Card {
  title: string;
  line1: string;
  line2: string;
  imgUrl: string;
  buttonText: string;
  url: string;
} 

interface EventGridProps {
  cards: Card[];
}

export default function EventGrid({ cards }: EventGridProps) {
  return (
    <div id="component-dde2b7e1-573d-4cec-8b63-3c9175a24da0" className="event_grid">
      <div className="grid_container">
        {cards.map((card, index) => (
          <EventCard
            key={index}
            title={card.title}
            line1={card.line1}
            line2={card.line2}
            imgUrl={card.imgUrl} 
            buttonText={card.buttonText}
            url={card.url}
          />
        ))}
      </div>
    </div>
  );
}
