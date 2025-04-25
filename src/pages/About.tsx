import { useEffect, useRef } from 'react';
import { Users, Heart, Award, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

// Team member type
type TeamMember = {
  name: string;
  role: string;
  avatar: string;
  description: string;
};

// Mock team data
const teamMembers: TeamMember[] = [
  {
    name: "Hiroshi Tanaka",
    role: "Founder & Lead Developer",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Hiroshi created SakuraDining with a passion for Japanese culture and Roblox development. He oversees all aspects of the game and community."
  },
  {
    name: "Aiko Yamamoto",
    role: "Community Manager",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Aiko manages our vibrant community, organizes events, and ensures everyone has a positive experience in SakuraDining."
  },
  {
    name: "Kenji Sato",
    role: "Game Designer",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Kenji is responsible for the gameplay mechanics, restaurant layout, and creating immersive roleplay experiences."
  },
  {
    name: "Yumi Nakamura",
    role: "Character & UI Designer",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description: "Yumi designs the characters, uniforms, UI elements, and ensures the visual aesthetic matches authentic Japanese restaurants."
  }
];

const About = () => {
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

  return (
    <div className="pt-20">
      <div 
        className="bg-neutral-900 text-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-paper-texture bg-cover bg-center"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-accent">Us</span>
            </h1>
            <p className="text-lg">
              Learn about our team, mission, and the story behind SakuraDining.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              ref={el => addToRefs(el, 0)}
              className="fade-in order-2 lg:order-1"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-primary">Story</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-4">
                SakuraDining began in 2023 as a passion project by a small team of developers who loved Japanese culture and wanted to create an immersive roleplaying experience on Roblox.
              </p>
              <p className="text-lg text-neutral-600 mb-4">
                What started as a simple concept quickly blossomed into a full-featured restaurant simulation with authentic Japanese cuisine, detailed roleplay mechanics, and a vibrant community.
              </p>
              <p className="text-lg text-neutral-600">
                Today, SakuraDining has grown to host thousands of players weekly, with regular events, seasonal updates, and a dedicated team working to create the best possible experience.
              </p>
            </div>
            
            <div
              ref={el => addToRefs(el, 1)}
              className="fade-in order-1 lg:order-2"
            >
              <img 
                src="https://images.pexels.com/photos/590478/pexels-photo-590478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Japanese restaurant interior" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-paper-texture bg-cover bg-center"></div>
        <div className="container-custom relative">
          <div 
            ref={el => addToRefs(el, 2)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-lg text-neutral-600">
              We are dedicated to creating an authentic, educational, and enjoyable Japanese restaurant experience that brings people together.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={el => addToRefs(el, 3)}
              className="fade-in"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="card p-6 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Users size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Community</h3>
                <p className="text-neutral-600 flex-grow">
                  Foster a welcoming, inclusive community where players can connect, learn, and have fun together.
                </p>
              </div>
            </div>
            
            <div 
              ref={el => addToRefs(el, 4)}
              className="fade-in"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="card p-6 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Heart size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Culture</h3>
                <p className="text-neutral-600 flex-grow">
                  Share authentic aspects of Japanese dining culture and cuisine in an engaging, interactive format.
                </p>
              </div>
            </div>
            
            <div 
              ref={el => addToRefs(el, 5)}
              className="fade-in"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="card p-6 h-full flex flex-col items-center text-center">
                <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mb-4">
                  <Award size={32} className="text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-3">Quality</h3>
                <p className="text-neutral-600 flex-grow">
                  Deliver a high-quality, continuously improving experience with attention to detail and player feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 6)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-lg text-neutral-600">
              The dedicated people behind SakuraDining who bring the experience to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                ref={el => addToRefs(el, 7 + index)}
                className="fade-in"
                style={{ transitionDelay: `${0.1 * index}s` }}
              >
                <div className="card overflow-hidden group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-medium mb-1">{member.name}</h3>
                    <p className="text-primary text-sm mb-3">{member.role}</p>
                    <p className="text-neutral-600 text-sm">{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 11)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Join Our <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Become part of our growing community of roleplayers and Japanese cuisine enthusiasts.
            </p>
          </div>
          
          <div 
            ref={el => addToRefs(el, 12)}
            className="fade-in max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-lg border border-neutral-200"
          >
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <MessageSquare size={96} className="text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-medium mb-4">Ready to Start Your Journey?</h3>
                <p className="text-neutral-600 mb-6">
                  Join thousands of players in our community! Connect with us on Discord for the latest news, events, and to meet fellow players.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://discord.gg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Join Discord
                  </a>
                  <a 
                    href="https://www.roblox.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-accent"
                  >
                    Play Now on Roblox
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;