import { useState, useEffect, useRef } from 'react';
import { ChefHat, Utensils, Coffee, Users, Star, Clock, HelpCircle, ShieldCheck, ChevronDown, HeartHandshake, Briefcase } from 'lucide-react';
import Button from '../components/Button';

type FaqItem = {
  question: string;
  answer: string;
};

const faqs: FaqItem[] = [
  {
    question: "How do I join a training session?",
    answer: "You can join training sessions through our website by visiting the Sessions page and clicking the Join Session button. This will take you to our Training Center in Roblox."
  },
  {
    question: "What roles can I play in the restaurant?",
    answer: "You can choose to be a Chef, Server, Host, Helper (combines Chef, Server, and Host duties), Staff Assistant (entry-level management), or Customer. Each role has different responsibilities and gameplay mechanics."
  },
  {
    question: "How do I become staff at Highest's Restaurant?",
    answer: "We regularly recruit for staff positions. Look for recruitment announcements or apply through our Discord server. Staff must be active, respectful, and willing to learn the role's responsibilities."
  },
  {
    question: "Are there any rules I need to follow?",
    answer: "Yes, we have community guidelines that include being respectful to other players, following staff instructions, staying in character during sessions, and using appropriate language. Full rules are available on our Discord."
  },
  {
    question: "Do I need to pay to play?",
    answer: "No, Highest's Restaurant is free to play! However, there may be optional purchasable items for customization."
  },
  {
    question: "How realistic is the roleplay expected to be?",
    answer: "We encourage authentic roleplay but also understand it's a game. We expect players to make a good-faith effort to stay in character and follow basic restaurant etiquette."
  }
];

const Info = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="pt-20">
      <div 
        className="bg-accent text-white py-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 bg-paper-texture bg-cover bg-center"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Information
            </h1>
            <p className="text-lg">
              Everything you need to know about Highest's Restaurant - our roles, rules, and gameplay.
            </p>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 0)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Available <span className="text-primary">Roles</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Choose your preferred role in our restaurant experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            <div 
              ref={el => addToRefs(el, 1)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Chef</h3>
              <p className="text-neutral-600 mb-4">
                Prepare delicious dishes in our kitchen using our cooking system.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 4 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 4/5</p>
            </div>
            
            <div 
              ref={el => addToRefs(el, 2)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Server</h3>
              <p className="text-neutral-600 mb-4">
                Take orders, serve food, and ensure customers have an excellent dining experience.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 3 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 3/5</p>
            </div>
            
            <div 
              ref={el => addToRefs(el, 3)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.3s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Host</h3>
              <p className="text-neutral-600 mb-4">
                Welcome guests, manage seating, and ensure smooth operation of the restaurant.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 2 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 2/5</p>
            </div>
            
            <div 
              ref={el => addToRefs(el, 4)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.4s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <HeartHandshake size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Helper</h3>
              <p className="text-neutral-600 mb-4">
                Multi-skilled role combining Chef, Server, and Host duties for maximum flexibility.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 5 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 5/5</p>
            </div>

            <div 
              ref={el => addToRefs(el, 5)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.5s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Staff Assistant</h3>
              <p className="text-neutral-600 mb-4">
                Entry-level management role, helping coordinate staff and operations.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 4 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 4/5</p>
            </div>
            
            <div 
              ref={el => addToRefs(el, 6)}
              className="fade-in card p-6 text-center"
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="bg-primary/10 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium mb-3">Customer</h3>
              <p className="text-neutral-600 mb-4">
                Enjoy the dining experience! Order food, interact with staff, and rate your experience.
              </p>
              <div className="flex justify-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className={`${star <= 1 ? 'text-accent fill-accent' : 'text-neutral-300'}`} />
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-1">Difficulty: 1/5</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 5)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Restaurant <span className="text-primary">Hours</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Our regular operating hours for roleplaying sessions.
            </p>
          </div>
          
          <div 
            ref={el => addToRefs(el, 6)}
            className="fade-in max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="card p-6 border border-neutral-200">
              <h3 className="font-serif text-xl font-medium mb-4 flex items-center">
                <Clock size={24} className="text-primary mr-2" />
                Weekdays
              </h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Monday</td>
                    <td className="py-3 text-right">3:00 PM - 9:00 PM EST</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Tuesday</td>
                    <td className="py-3 text-right">3:00 PM - 9:00 PM EST</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Wednesday</td>
                    <td className="py-3 text-right">3:00 PM - 9:00 PM EST</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Thursday</td>
                    <td className="py-3 text-right">3:00 PM - 9:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Friday</td>
                    <td className="py-3 text-right">3:00 PM - 11:00 PM EST</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="card p-6 border border-neutral-200">
              <h3 className="font-serif text-xl font-medium mb-4 flex items-center">
                <Clock size={24} className="text-primary mr-2" />
                Weekends & Holidays
              </h3>
              <table className="w-full">
                <tbody>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Saturday</td>
                    <td className="py-3 text-right">12:00 PM - 11:00 PM EST</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 font-medium">Sunday</td>
                    <td className="py-3 text-right">12:00 PM - 9:00 PM EST</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium">Holidays</td>
                    <td className="py-3 text-right">Special hours (check announcements)</td>
                  </tr>
                </tbody>
              </table>
              <p className="mt-4 text-sm text-neutral-500">
                * Special events may extend beyond regular hours. Check our Sessions page for details.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 7)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Community <span className="text-primary">Guidelines</span>
            </h2>
            <p className="text-lg text-neutral-600">
              To ensure everyone has an enjoyable experience, please follow these guidelines.
            </p>
          </div>
          
          <div 
            ref={el => addToRefs(el, 8)}
            className="fade-in max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            <div className="card p-6 border border-neutral-200">
              <h3 className="font-serif text-xl font-medium mb-4 text-primary">Do's</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Respect all players and staff members</p>
                </li>
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Stay in character during roleplay sessions</p>
                </li>
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Follow instructions from staff and moderators</p>
                </li>
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Use appropriate language suitable for all ages</p>
                </li>
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Report any issues to moderators</p>
                </li>
                <li className="flex">
                  <div className="text-success mr-3">✓</div>
                  <p>Have fun and enjoy the experience!</p>
                </li>
              </ul>
            </div>
            
            <div className="card p-6 border border-neutral-200">
              <h3 className="font-serif text-xl font-medium mb-4 text-error">Don'ts</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Harass or bully other players</p>
                </li>
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Use inappropriate language or themes</p>
                </li>
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Intentionally disrupt gameplay</p>
                </li>
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Exploit game mechanics</p>
                </li>
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Share personal information</p>
                </li>
                <li className="flex">
                  <div className="text-error mr-3">✗</div>
                  <p>Advertise other games or services</p>
                </li>
              </ul>
            </div>
          </div>
          
          <div 
            ref={el => addToRefs(el, 9)}
            className="fade-in mt-12 p-6 max-w-4xl mx-auto bg-primary/5 rounded-lg border border-primary/20"
          >
            <div className="flex items-start">
              <ShieldCheck size={24} className="text-primary mt-1 mr-3" />
              <div>
                <h3 className="font-serif text-xl font-medium mb-2">Moderation Policy</h3>
                <p className="text-neutral-700">
                  Our moderators work hard to ensure a safe and enjoyable environment for all players. Violations of our guidelines may result in warnings, temporary bans, or permanent removal from the game, depending on the severity and frequency of the offense.
                </p>
                <p className="text-neutral-700 mt-2">
                  If you experience any issues, please report them immediately to a moderator in-game or through our Discord server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div 
            ref={el => addToRefs(el, 10)}
            className="fade-in max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="text-lg text-neutral-600">
              Find answers to common questions about Highest's Restaurant.
            </p>
          </div>
          
          <div 
            ref={el => addToRefs(el, 11)}
            className="fade-in max-w-3xl mx-auto divide-y divide-neutral-200"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="py-5">
                <button
                  className="flex w-full justify-between items-center text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="font-serif text-lg font-medium flex items-center">
                    <HelpCircle size={20} className="text-primary mr-2" />
                    {faq.question}
                  </h3>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </span>
                </button>
                <div
                  className={`mt-2 text-neutral-600 transition-all duration-300 overflow-hidden ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-2 pl-7">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div 
            ref={el => addToRefs(el, 12)}
            className="fade-in mt-12 text-center"
          >
            <p className="mb-6">Still have questions? Join our Discord community for more information!</p>
            <a 
              href="https://discord.gg" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;