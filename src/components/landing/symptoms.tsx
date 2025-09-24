import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function Symptoms() {
  const symptoms = [
    'Constant worrying',
    'Feeling sad or empty',
    'Irritability',
    'Difficulty concentrating',
    'Sleep problems',
    'Loss of interest',
    'Unexplained aches',
    'Feeling guilty',
    'Changes in appetite',
    'Social withdrawal',
    'Perfectionism',
    'Procrastination',
  ];

  return (
    <section id="symptoms" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Does This Sound Familiar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Sometimes the signs are subtle, and other times they are
            overwhelming. Recognizing these symptoms is a courageous step
            towards feeling better.
          </p>
        </div>
        <div className="mt-12 max-w-4xl mx-auto flex flex-wrap justify-center items-center gap-3">
          {symptoms.map((symptom) => (
            <Badge
              key={symptom}
              variant="outline"
              className="text-base md:text-lg px-4 py-2 bg-card border-accent text-accent-foreground"
            >
              {symptom}
            </Badge>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            If you identify with any of these, you are not alone.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <a href="#appointment">Let&apos;s Talk About It</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
