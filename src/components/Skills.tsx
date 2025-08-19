import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Wrench, 
  Server, 
  Cloud, 
  Brain
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Programming & Scripting',
      skills: [
        { name: 'SQL/PL-SQL', level: 90 },
        { name: 'Python Basics', level: 75 },
        { name: 'PowerBI', level: 80 },
        { name: 'Prompt Engineering (GPT/Claude)', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Query Tools',
      skills: [
        { name: 'SSMS', level: 90 },
        { name: 'SQL Developer', level: 85 },
        { name: 'Query Optimization', level: 80 },
        { name: 'Database Scripting', level: 85 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Platforms',
      skills: [
        { name: 'Freshdesk', level: 90 },
        { name: 'JIRA', level: 85 },
        { name: 'ServiceNow', level: 80 },
        { name: 'Azure Boards', level: 75 },
        { name: 'Visual Studio', level: 80 },
        { name: 'ALM', level: 85 }
      ]
    },
    {
      icon: Server,
      title: 'Backend & Application Support',
      skills: [
        { name: 'Incident Management', level: 95 },
        { name: 'Change Management', level: 90 },
        { name: 'Root Cause Analysis', level: 90 },
        { name: 'Server Monitoring & Troubleshooting', level: 85 }
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud/Infrastructure',
      skills: [
        { name: 'Windows Server Administration', level: 80 },
        { name: 'Azure Services (Basic)', level: 70 }
      ]
    },
    {
      icon: Brain,
      title: 'AI & Automation',
      skills: [
        { name: 'GPT-based Log Analysis', level: 85 },
        { name: 'AI Process Automation', level: 75 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'AI Integration Planning', level: 80 }
      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'hsl(var(--tech-green))';
    if (level >= 80) return 'hsl(var(--electric-blue))';
    if (level >= 70) return 'hsl(var(--neon-purple))';
    return 'hsl(var(--cyber-pink))';
  };

  const certifications = [
    'Technical Support Excellence',
    'SQL Database Management',
    'Azure Fundamentals (Learning)',
    'AI/ML Integration (Self-taught)',
    'Agile Methodology'
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Technical Skills</h2>
        <p className="text-lg text-muted-foreground">
          Comprehensive expertise across development, operations, and AI technologies
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12">
        {skillCategories.map((category, index) => (
          <Card key={index} className="glass-card p-6 hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">{category.title}</h3>
            </div>
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2"
                    style={{
                      '--progress-background': getSkillColor(skill.level)
                    } as React.CSSProperties}
                  />
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Certifications & Learning */}
      <Card className="glass-card p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-primary" />
          Certifications & Continuous Learning
        </h3>
        <div className="flex flex-wrap gap-2">
          {certifications.map((cert, index) => (
            <Badge key={index} variant="secondary" className="glass-card">
              {cert}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Committed to continuous learning and staying updated with latest technologies, 
          especially in AI/ML integration and cloud services.
        </p>
      </Card>
    </section>
  );
};

export default Skills;