import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn('flex items-center gap-2', className)}>
      <div className="bg-primary/20 p-2 rounded-full">
        <BrainCircuit className="h-6 w-6 text-primary" />
      </div>
      <span className="font-headline text-xl font-bold text-foreground hidden sm:inline-block">
        HolisticMind Clinic
      </span>
    </a>
  );
}
