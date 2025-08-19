import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Folder, 
  ExternalLink, 
  Users, 
  TrendingUp,
  Shield,
  Database,
  Zap,
  Award
} from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Compliance Application Support',
      role: 'Technical Compliance Analyst',
      description: 'Led end-to-end support for high-value accounts, resolving complex issues and boosting client satisfaction.',
      achievements: [
        'Managed 200+ client environments',
        'Improved SLA adherence significantly',
        'Enhanced system performance and stability',
        'Implemented optimized database queries and backend processes'
      ],
      technologies: ['SQL', 'Database Optimization', 'Backend Systems', 'SaaS Support'],
      impact: {
        clients: '200+',
        performance: '+35%',
        satisfaction: '98%'
      },
      icon: Shield
    },
    {
      title: 'AI-Powered Log Analysis System',
      role: 'Innovation Lead',
      description: 'Engineered GPT-based automation to analyze backend logs and error patterns for faster issue resolution.',
      achievements: [
        'Reduced debugging time by 30%',
        'Automated root cause identification',
        'Improved L2/L3 ticket resolution',
        'Enhanced team productivity through AI integration'
      ],
      technologies: ['Python', 'GPT API', 'Log Analysis', 'AI/ML', 'Automation'],
      impact: {
        efficiency: '+30%',
        automation: '75%',
        accuracy: '95%'
      },
      icon: Zap
    },
    {
      title: 'Large-Scale System Upgrades',
      role: 'Technical Lead',
      description: 'Spearheaded major upgrade projects across multiple client environments, ensuring minimal downtime.',
      achievements: [
        'Successfully upgraded 200+ environments',
        'Zero critical incidents during upgrades',
        'Improved system stability and performance',
        'Coordinated cross-functional teams'
      ],
      technologies: ['System Administration', 'Change Management', 'Risk Assessment', 'Project Management'],
      impact: {
        uptime: '99.9%',
        environments: '200+',
        downtime: 'Minimal'
      },
      icon: Database
    }
  ];

  const handleViewDetails = (projectTitle: string) => {
    // In a real application, this would navigate to a detailed project page
    alert(`Detailed information about "${projectTitle}" would be displayed here`);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Key Projects</h2>
        <p className="text-lg text-muted-foreground">
          Delivering impactful solutions across technical support and innovation
        </p>
      </div>

      <div className="grid lg:grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="glass-card overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="p-6">
              {/* Project Header */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <project.icon className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-primary font-semibold">{project.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <Button
                  variant="tech"
                  onClick={() => handleViewDetails(project.title)}
                  className="self-start"
                >
                  <ExternalLink className="w-4 h-4" />
                  View Details
                </Button>
              </div>

              {/* Impact Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-muted/10">
                {Object.entries(project.impact).map(([key, value], idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-lg font-bold text-primary">{value}</div>
                    <div className="text-xs text-muted-foreground capitalize">{key}</div>
                  </div>
                ))}
              </div>

              {/* Achievements */}
              <div className="mb-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  Key Achievements
                </h4>
                <div className="grid md:grid-cols-2 gap-2">
                  {project.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <TrendingUp className="w-3 h-3 text-tech-green mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Folder className="w-4 h-4 text-primary" />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="glass-card">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Card className="glass-card p-8 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-muted-foreground mb-6">
            I'm always excited to work on challenging technical projects that make a real impact.
          </p>
          <Button variant="neon" size="lg" className="animate-pulse-glow">
            <Users className="w-4 h-4" />
            Let's Connect
          </Button>
        </Card>
      </div>
    </section>
  );
};

export default Projects;