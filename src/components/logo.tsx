// import { BrainCircuit } from 'lucide-react';
import { cn } from '@/lib/utils';
import logo from '../assets/images/logo.png';
import Image from 'next/image';

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#home" className={cn('flex items-center gap-2', className)}>
      <div className=" p-2 rounded-sm">
        {/* <BrainCircuit className="h-6 w-6 text-primary" /> */}
        <Image src={logo} alt="HolisticMind Clinic" width={120} height={50} className="h-13 w-13" />
      </div>
      {/* <span className="font-headline text-xl font-bold text-foreground hidden sm:inline-block">
        HolisticMind Clinic
      </span> */}
    </a>
  );
}
