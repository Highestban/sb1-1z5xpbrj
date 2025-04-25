import { DivideIcon as LucideIcon } from 'lucide-react';

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="card p-6 border border-neutral-200 hover:border-primary transition-colors duration-300">
      <div className="bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-4">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="font-serif text-xl font-medium mb-3">{title}</h3>
      <p className="text-neutral-600">{description}</p>
    </div>
  );
};

export default FeatureCard;