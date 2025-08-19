import NoticeTimer from '@/components/NoticeTimer';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Education from '@/components/Education';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4">
        <NoticeTimer />
        
        <section id="home">
          <Hero />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="education">
          <Education />
        </section>
      </div>
      
      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 Sharad Srivastav. Built with passion for technology and innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
