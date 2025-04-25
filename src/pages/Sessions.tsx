import { useState, useEffect, useRef } from 'react';
import { CalendarDays, Clock, Filter, ChevronDown } from 'lucide-react';
import SessionCard from '../components/SessionCard';

// Generate training sessions every 3 hours
const generateSessions = () => {
  const sessions = [];
  const startDate = new Date();
  startDate.setHours(0, 0, 0, 0);
  
  for (let i = 0; i < 14; i++) { // 2 weeks of sessions
    const currentDate = new Date(startDate);
    currentDate.setDate(currentDate.getDate() + Math.floor(i / 8));
    
    for (let hour = 9; hour <= 21; hour += 3) { // Sessions from 9 AM to 9 PM
      const sessionDate = new Date(currentDate);
      sessionDate.setHours(hour);
      
      const endTime = new Date(sessionDate);
      endTime.setHours(hour + 2);
      
      sessions.push({
        id: i * 8 + hour,
        title: `Training Session ${hour <= 12 ? 'AM' : 'PM'}`,
        date: sessionDate.toLocaleDateString('en-US', { 
          weekday: 'long',
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        }),
        time: `${sessionDate.toLocaleTimeString('en-US', { 
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        })} - ${endTime.toLocaleTimeString('en-US', { 
          hour: 'numeric',
          minute: '2-digit',
          hour12: true 
        })} EDT`,
        host: `Trainer_${hour <= 12 ? 'Morning' : 'Evening'}`,
        slots: {
          total: 15,
          filled: Math.floor(Math.random() * 12)
        },
        description: "Join our comprehensive training session to learn restaurant operations, role responsibilities, and best practices.",
        type: "Training"
      });
    }
  }
  
  return sessions;
};

const sessions = generateSessions();
const sessionTypes = ["All", "Training"];

const Sessions = () => {
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const observerRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
        }
      });
    };
    
    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });
    
    observerRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });
    
    return () => observer.disconnect();
  }, []);
  
  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !observerRefs.current.includes(el)) {
      observerRefs.current[index] = el;
    }
  };

  const filteredSessions = sessions.filter(session => {
    const matchesType = selectedType === 'All' || session.type === selectedType;
    const isAvailable = !showAvailableOnly || session.slots.filled < session.slots.total;
    
    return matchesType && isAvailable;
  });

  return (
    <div className="pt-20">
      <div 
        className="bg-secondary text-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-paper-texture bg-cover bg-center"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Training Sessions
            </h1>
            <p className="text-lg">
              Join our scheduled training sessions and learn the ropes!
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <CalendarDays size={24} className="text-primary" />
            <h2 className="font-serif text-2xl font-medium">Training Schedule</h2>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="relative">
              <button
                className="flex items-center justify-between space-x-2 px-4 py-2 border border-neutral-300 rounded-md bg-white"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <div className="flex items-center">
                  <Filter size={18} className="text-neutral-500 mr-2" />
                  <span>{selectedType}</span>
                </div>
                <ChevronDown size={18} className={`text-neutral-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isFilterOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-md shadow-lg">
                  {sessionTypes.map((type) => (
                    <button
                      key={type}
                      className={`block w-full text-left px-4 py-2 hover:bg-neutral-100 ${
                        selectedType === type ? 'bg-primary/10 text-primary' : ''
                      }`}
                      onClick={() => {
                        setSelectedType(type);
                        setIsFilterOpen(false);
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <label className="flex items-center space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                checked={showAvailableOnly}
                onChange={() => setShowAvailableOnly(!showAvailableOnly)}
              />
              <span>Available slots only</span>
            </label>
          </div>
        </div>

        {filteredSessions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredSessions.map((session, index) => (
              <div
                key={session.id}
                ref={el => addToRefs(el, index)}
                className="fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <SessionCard
                  title={session.title}
                  date={session.date}
                  time={session.time}
                  host={session.host}
                  slots={session.slots}
                  description={session.description}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 border-2 border-dashed border-neutral-200 rounded-lg">
            <Clock size={48} className="text-neutral-400 mx-auto mb-4" />
            <p className="text-xl text-neutral-500">No sessions match your current filters.</p>
            <p className="text-neutral-400 mt-2">Try changing your filter settings or check back later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sessions;