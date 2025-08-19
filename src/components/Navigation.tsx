import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  User, 
  Briefcase, 
  Code, 
  FolderOpen, 
  GraduationCap,
  Menu,
  X
} from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', href: '#home' },
    { icon: User, label: 'About', href: '#about' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Code, label: 'Skills', href: '#skills' },
    { icon: FolderOpen, label: 'Projects', href: '#projects' },
    { icon: GraduationCap, label: 'Education', href: '#education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-primary/20' : 'glass-card border-white/10'
      } hidden md:block`}>
        <div className="flex items-center gap-1 p-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.href)}
              className="flex items-center gap-2 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <item.icon className="w-4 h-4" />
              <span className="hidden lg:inline">{item.label}</span>
            </Button>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation Button */}
      <Button
        variant="glass"
        size="icon"
        className="fixed top-4 right-4 z-50 md:hidden neon-glow"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </Button>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="absolute top-16 right-4 glass-card p-4 min-w-[200px]">
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start gap-3"
                  onClick={() => scrollToSection(item.href)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;