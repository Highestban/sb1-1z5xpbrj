import { useState, useEffect, useRef } from 'react';
import { Search, Filter, ChevronDown } from 'lucide-react';
import AnnouncementCard from '../components/AnnouncementCard';

// Mock data
const announcements = [
  {
    id: 1,
    title: "Summer Festival Event",
    date: "June 15, 2025",
    content: "Join us for our annual Summer Festival with special menu items, decorations, and in-game rewards for all participants.",
    image: "https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Event"
  },
  {
    id: 2,
    title: "New Menu Items",
    date: "May 28, 2025",
    content: "We've added new authentic Japanese dishes to our menu. Come try our fresh sushi platters and seasonal specialties!",
    image: "https://images.pexels.com/photos/884600/pexels-photo-884600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Update"
  },
  {
    id: 3,
    title: "Staff Recruitment",
    date: "May 10, 2025",
    content: "We're looking for dedicated players to join our staff team. Apply now to become a chef, server, or host at SakuraDining.",
    image: "https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Recruitment"
  },
  {
    id: 4,
    title: "Server Maintenance",
    date: "April 25, 2025",
    content: "We'll be performing server maintenance on April 26th from 2 AM to 5 AM EST. The game will be unavailable during this time.",
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Maintenance"
  },
  {
    id: 5,
    title: "Weekend Special Event",
    date: "April 18, 2025",
    content: "This weekend we're hosting a special sakura-themed dining event with limited-time decorations and menu items.",
    image: "https://images.pexels.com/photos/5945559/pexels-photo-5945559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Event"
  },
  {
    id: 6,
    title: "New Role: Host",
    date: "April 5, 2025",
    content: "We're introducing a new role to our restaurant - the Host. Apply now to be one of the first to welcome guests to our restaurant.",
    image: "https://images.pexels.com/photos/933245/pexels-photo-933245.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Update"
  },
];

const categories = ["All", "Event", "Update", "Recruitment", "Maintenance"];

const Announcements = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        announcement.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || announcement.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20">
      <div 
        className="bg-primary text-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-paper-texture bg-cover bg-center"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Announcements
            </h1>
            <p className="text-lg">
              Stay updated with the latest news, events, and updates from SakuraDining.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-1/3">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-neutral-500" />
            </div>
            <input
              type="text"
              placeholder="Search announcements..."
              className="pl-10 pr-4 py-2 w-full border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="relative w-full md:w-auto">
            <button
              className="flex items-center justify-between w-full md:w-auto space-x-2 px-4 py-2 border border-neutral-300 rounded-md bg-white"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <div className="flex items-center">
                <Filter size={18} className="text-neutral-500 mr-2" />
                <span>{selectedCategory}</span>
              </div>
              <ChevronDown size={18} className={`text-neutral-500 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isFilterOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white border border-neutral-200 rounded-md shadow-lg">
                {categories.map((category) => (
                  <button
                    key={category}
                    className={`block w-full text-left px-4 py-2 hover:bg-neutral-100 ${
                      selectedCategory === category ? 'bg-primary/10 text-primary' : ''
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {filteredAnnouncements.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnnouncements.map((announcement, index) => (
              <div
                key={announcement.id}
                ref={el => addToRefs(el, index)}
                className="fade-in"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <AnnouncementCard
                  title={announcement.title}
                  date={announcement.date}
                  content={announcement.content}
                  image={announcement.image}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-neutral-500">No announcements found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Announcements;