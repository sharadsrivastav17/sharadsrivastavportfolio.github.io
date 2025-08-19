import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin,
  Star,
  Trophy,
  DollarSign
} from 'lucide-react';

const Education = () => {
  const achievements = [
    {
      title: 'On the Spot Award',
      count: 'Thrice',
      description: 'Awarded for the deployment of the certificate and the handling of critical incidents during non-working days.',
      icon: Star,
      color: 'text-tech-green'
    },
    {
      title: 'Award for Excellence',
      count: 'Twice',
      description: 'Awarded for completing every incident on time and getting appreciation from the client.',
      icon: Trophy,
      color: 'text-primary'
    }
  ];

  const languages = ['English', 'Hindi'];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Education & Achievements</h2>
        <p className="text-lg text-muted-foreground">
          Academic foundation and professional recognition
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Education */}
        <Card className="glass-card p-6 hover:scale-105 transition-transform duration-300">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
            <div>
              <h3 className="text-2xl font-bold">Bachelor of Technology</h3>
              <p className="text-primary font-semibold">PSIT College of Engineering</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>2014 - 2018</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Kanpur, UP, India</span>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-muted/10">
            <h4 className="font-semibold mb-2">Academic Focus</h4>
            <p className="text-sm text-muted-foreground">
              Strong foundation in engineering principles, problem-solving methodologies, 
              and technical system design that directly supports my current role in 
              technical support and system optimization.
            </p>
          </div>
        </Card>

        {/* Professional Achievements */}
        <div className="space-y-6">
          <Card className="glass-card p-6">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-bold">Professional Awards</h3>
            </div>

            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 rounded-lg bg-muted/10">
                  <div className="flex items-center gap-3 mb-2">
                    <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                    <div>
                      <h4 className="font-semibold">{achievement.title}</h4>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.count}
                      </Badge>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </Card>

          {/* Languages */}
          <Card className="glass-card p-6">
            <h3 className="text-xl font-semibold mb-4">Languages</h3>
            <div className="flex gap-2">
              {languages.map((language, index) => (
                <Badge key={index} variant="outline" className="glass-card">
                  {language}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {/* Impact Summary */}
      <Card className="glass-card p-8 mt-12">
        <div className="text-center">
          <h3 className="text-2xl font-bold gradient-text mb-4">Professional Impact Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Clients Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-tech-green mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Users Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyber-pink mb-2">$100K+</div>
              <div className="text-sm text-muted-foreground">Cost Savings</div>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Education;