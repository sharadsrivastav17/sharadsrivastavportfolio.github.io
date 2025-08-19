import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  ChevronDown, 
  ChevronUp,
  Lightbulb,
  Users,
  TrendingUp,
  Wrench
} from 'lucide-react';

const Experience = () => {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const experiences = [
    {
      company: 'PwC',
      position: 'Assistant Manager - Technical Support Lead',
      duration: 'Sep 2022 – Present',
      location: 'Delhi NCR',
      type: 'Current Role',
      achievements: [
        'Led technical support team for 200+ clients on Compliance Tool (SaaS, Enterprise Edition)',
        'Handled L1/L2/L3 queries, priority accounts and complex database/backend/Server issues',
        'Team leadership & training—headed the support team, on-boarding new members through structured KT sessions',
        'Performance optimization & upgrades—executed major Tool upgrade projects across client environments',
        'Cross-functional collaboration—partnered with development teams to investigate & resolve critical issues',
        'Innovation & automation—leveraged Python for planned AI capability integration',
        'Engineered GPT-based prompts to analyze backend logs and error patterns, reducing root cause identification time by 30%'
      ],
      skills: ['Python AI Integration', 'Team Leadership', 'SaaS Support', 'Database Optimization', 'GPT Integration'],
      highlights: [
        { icon: TrendingUp, text: '30% faster debugging with AI' },
        { icon: Users, text: '200+ clients managed' },
        { icon: Lightbulb, text: 'AI automation pioneer' }
      ]
    },
    {
      company: 'TCS',
      position: 'System Engineer - Technical Support Lead',
      duration: 'Jul 2018 – Sep 2022',
      location: 'Noida, UP',
      type: 'Previous Role',
      achievements: [
        'End-to-end technical support—Led troubleshooting, debugging (Core Java, .NET) and post go-live application support',
        'Data & process expertise—Delivered data scripting and implementation, managed services/printer configurations',
        'Quality assurance—Prepared and executed detailed test plans in ALM Tool to validate functionality and performance',
        'Collaboration & knowledge sharing—Worked in Agile teams, conducted knowledge transfer sessions',
        'Resolved complex customer issues in realtime through in-depth root cause analysis'
      ],
      skills: ['Java', '.NET', 'ALM Tools', 'Agile Methodology', 'Root Cause Analysis', 'Quality Assurance'],
      highlights: [
        { icon: Wrench, text: 'Full-stack troubleshooting' },
        { icon: Users, text: 'Agile team collaboration' },
        { icon: TrendingUp, text: 'Proactive monitoring' }
      ]
    }
  ];

  const toggleExpanded = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold gradient-text mb-4">Professional Experience</h2>
        <p className="text-lg text-muted-foreground">
          4+ years of technical leadership and innovation
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="glass-card overflow-hidden">
            <div className="p-6">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-6 h-6 text-primary" />
                    <h3 className="text-2xl font-bold">{exp.company}</h3>
                    <Badge 
                      variant={exp.type === 'Current Role' ? 'default' : 'secondary'}
                      className={exp.type === 'Current Role' ? 'bg-gradient-primary' : ''}
                    >
                      {exp.type}
                    </Badge>
                  </div>
                  <h4 className="text-xl text-primary font-semibold">{exp.position}</h4>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <Button
                  variant="ghost"
                  onClick={() => toggleExpanded(index)}
                  className="self-start lg:self-center"
                >
                  {expandedJob === index ? (
                    <>
                      <ChevronUp className="w-4 h-4" />
                      Less Details
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4" />
                      More Details
                    </>
                  )}
                </Button>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {exp.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-muted/20">
                    <highlight.icon className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">{highlight.text}</span>
                  </div>
                ))}
              </div>

              {/* Expanded Content */}
              {expandedJob === index && (
                <div className="space-y-6 animate-in slide-in-from-top-5 duration-300">
                  <div>
                    <h5 className="font-semibold mb-3 text-primary">Key Achievements</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm leading-relaxed">
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-3 text-primary">Technical Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, idx) => (
                        <Badge key={idx} variant="outline" className="glass-card">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;