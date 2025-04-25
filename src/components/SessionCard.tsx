import { Calendar, Clock, Users } from 'lucide-react';
import Button from './Button';

type SessionCardProps = {
  title: string;
  date: string;
  time: string;
  host: string;
  slots: {
    total: number;
    filled: number;
  };
  description: string;
};

const SessionCard = ({ title, date, time, host, slots, description }: SessionCardProps) => {
  const availability = slots.filled < slots.total;
  
  return (
    <div className="card overflow-hidden border border-neutral-200">
      <div className="p-6">
        <div className={`text-xs font-medium px-3 py-1 rounded-full mb-4 inline-block ${
          availability ? 'bg-green-100 text-success' : 'bg-red-100 text-error'
        }`}>
          {availability ? 'Spots Available' : 'Fully Booked'}
        </div>
        
        <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-neutral-600">
            <Calendar size={16} className="mr-2 text-primary" />
            <span>{date}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <Clock size={16} className="mr-2 text-primary" />
            <span>{time}</span>
          </div>
          
          <div className="flex items-center text-sm text-neutral-600">
            <Users size={16} className="mr-2 text-primary" />
            <span>{slots.filled}/{slots.total} slots filled</span>
          </div>
        </div>
        
        <p className="text-neutral-600 mb-6">{description}</p>
        
        <div className="flex justify-between items-center">
          <div className="text-sm text-neutral-500">
            Hosted by: <span className="font-medium">{host}</span>
          </div>
          
          <a 
            href="https://www.roblox.com/games/14033833620/Highests-Training-Center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant={availability ? 'primary' : 'outline'} 
              size="sm"
              disabled={!availability}
            >
              {availability ? 'Join Session' : 'Full'}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SessionCard;