import { Brain, CloudRain, Zap, HeartCrack } from 'lucide-react';

export function StrugglingWith() {
  const struggles = [
    {
      icon: Zap,
      title: 'Anxiety & Stress',
      description: 'Feeling overwhelmed, constantly on edge, or unable to relax.',
    },
    {
      icon: CloudRain,
      title: 'Depression & Low Mood',
      description:
        'Losing interest in activities, feeling hopeless, or lacking energy.',
    },
    {
      icon: HeartCrack,
      title: 'Relationship Issues',
      description:
        'Struggling with communication, trust, or connection with partners.',
    },
    {
      icon: Brain,
      title: 'Low Self-Esteem',
      description: 'Battling with self-doubt, criticism, or feelings of inadequacy.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Are You Struggling With...
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            It&apos;s okay not to be okay. Many of us face challenges that can
            feel overwhelming. Recognizing the struggle is the first step
            towards healing.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {struggles.map((struggle, index) => (
            <div key={index} className="text-center p-6">
              <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                <struggle.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-4 font-semibold text-xl text-foreground">
                {struggle.title}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {struggle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
