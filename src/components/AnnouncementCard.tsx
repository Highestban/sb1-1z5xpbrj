import { CalendarClock } from 'lucide-react';

type AnnouncementCardProps = {
  title: string;
  date: string;
  content: string;
  image?: string;
};

const AnnouncementCard = ({ title, date, content, image }: AnnouncementCardProps) => {
  return (
    <div className="card card-hover group">
      {image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-neutral-500 mb-2">
          <CalendarClock size={16} className="mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600">
          {content}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementCard;