import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const NoticeTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');
  
  // Set Last Working Day (LWD) - you can modify this date
  const lastWorkingDay = new Date('2024-12-31'); // Change this to actual LWD
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const lwdTime = lastWorkingDay.getTime();
      const difference = lwdTime - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft('Notice period completed');
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [lastWorkingDay]);
  
  return (
    <Card className="glass-card p-3 mb-6 border-primary/20">
      <div className="flex items-center justify-center gap-2 text-sm">
        <Clock className="w-4 h-4 text-primary animate-pulse" />
        <span className="text-muted-foreground">Serving Notice Period, LWD is:</span>
        <span className="font-mono font-bold text-primary gradient-text">
          {lastWorkingDay.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
        <span className="text-xs text-muted-foreground">({timeLeft})</span>
      </div>
    </Card>
  );
};

export default NoticeTimer;