'use client'
import { useEffect, useState } from 'react';

type CountdownTimerProps = {
  targetDate: Date; // string yerine Date
};

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const seconds = Math.floor((timeLeft / 1000) % 60);

  return (
    <div className="flex space-x-2 text-red-500 font-bold">
      <span>{hours}h</span>:<span>{minutes}m</span>:<span>{seconds}s</span>
    </div>
  );
}
