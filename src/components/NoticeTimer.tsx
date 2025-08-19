import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const NoticeTimer = () => {
  const [timeLeft, setTimeLeft] = useState('');
  
  // Set Last Working Day (LWD) - you can modify this date
  const lastWorkingDay = new Date('2024-10-15T23:59:59'); // October 15th, 2024
  
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
        
        if (days > 0) {
          setTimeLeft(`${days} days, ${hours} hours, ${minutes} minutes`);
        } else if (hours > 0) {
          setTimeLeft(`${hours} hours, ${minutes} minutes, ${seconds} seconds`);
        } else if (minutes > 0) {
          setTimeLeft(`${minutes} minutes, ${seconds} seconds`);
        } else {
          setTimeLeft(`${seconds} seconds`);
        }
      } else {
        setTimeLeft('Notice period completed');
      }
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  return (
    <Card className="bg-primary/10 border-primary/30 p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-center gap-3 text-base">
        <Clock className="w-5 h-5 text-primary animate-pulse" />
        <span className="text-foreground font-medium">Serving Notice Period, LWD is:</span>
        <span className="font-mono font-bold text-primary text-lg">
          {lastWorkingDay.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </span>
        <span className="text-sm text-primary font-semibold bg-primary/20 px-2 py-1 rounded">
          ({timeLeft})
        </span>
      </div>
    </Card>
  );
};

export default NoticeTimer;