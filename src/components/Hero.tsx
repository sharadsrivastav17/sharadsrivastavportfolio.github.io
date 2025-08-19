import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  TrendingUp, 
  DollarSign,
  Award,
  ExternalLink,
  Download
} from 'lucide-react';

const Hero = () => {
  const impactMetrics = [
    { icon: Users, label: 'Clients Served', value: '200+' },
    { icon: Users, label: 'Users Served', value: '50K+' },
    { icon: TrendingUp, label: 'Client Satisfaction', value: '98%' },
    { icon: DollarSign, label: 'Cost Savings', value: '$100K+' }
  ];

  const handleDownloadCV = () => {
    // In a real application, this would download the actual CV
    alert('CV download functionality would be implemented here');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/sharadsrivastav', '_blank');
  };

  return (
    <section className="min-h-screen flex flex-col justify-center py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Personal Info */}
        <div className="space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start mb-6">
            <div className="relative">
              <img 
                src="/lovable-uploads/0e86a3c8-eb63-478e-9b30-057077bae07d.png" 
                alt="Sharad Srivastav - Technical Support Lead"
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/30 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl font-bold leading-tight">
              <span className="gradient-text">Sharad Srivastav</span>
            </h1>
            <h2 className="text-2xl text-muted-foreground">
              Technical Support Lead & AI Enthusiast
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Leading technical support for 200+ clients with expertise in compliance tools, 
              database optimization, and AI-driven automation. Passionate about leveraging 
              technology to solve complex problems and enhance operational efficiency.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-primary" />
              <span>srivastav.sharadsd@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-primary" />
              <span>+91-9450001060</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>HAL Colony, Kanpur, UP</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="neon" 
              size="lg"
              onClick={handleDownloadCV}
              className="animate-float"
            >
              <Download className="w-4 h-4" />
              Download CV
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={handleLinkedInClick}
            >
              <ExternalLink className="w-4 h-4" />
              LinkedIn Profile
            </Button>
          </div>

          {/* Key Skills */}
          <div className="flex flex-wrap gap-2">
            {['Python AI Integration', 'SQL/PL-SQL', 'Azure Services', 'GPT Prompt Engineering', 'Technical Leadership'].map((skill) => (
              <Badge key={skill} variant="secondary" className="glass-card">
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold gradient-text mb-2">Impact Metrics</h3>
            <p className="text-muted-foreground">Delivering measurable results</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300 neon-glow">
                <metric.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold gradient-text mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </Card>
            ))}
          </div>

          {/* Recent Achievements */}
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <Award className="w-6 h-6 text-primary" />
              <h4 className="text-lg font-semibold">Recent Achievements</h4>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Reduced debugging time by 30% using GPT-based log analysis</li>
              <li>• Led upgrade projects for 200+ client environments</li>
              <li>• Awarded 'On the Spot Award' three times for critical incident handling</li>
              <li>• Achieved 98% client satisfaction with proactive support strategies</li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hero;