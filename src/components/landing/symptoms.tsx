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
        {/* <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            If you identify with any of these, you are not alone.
          </p>
          <Button size="lg" className="mt-4" asChild>
            <a href="#appointment">Let&apos;s Talk About It</a>
          </Button>
        </div> */}
      </div>
      <div className="mx-auto mt-12 max-w-3xl px-4 sm:mt-16">
        <div className="flex flex-col items-center gap-6 rounded-xl border border-primary bg-muted/30 p-6 text-center sm:flex-row sm:text-left">
          <img
            src="https://www.svgrepo.com/show/505175/annual-assessment.svg"
            alt="Assessment"
            width={100}
            height={100}
            className="shrink-0 rounded-full bg-background p-2"
          />
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-foreground">
              Confused About Your Symptoms?
            </h2>
            <p className="mt-1 text-muted-foreground">
              Take an assessment to better understand your situation.
            </p>
          </div>
          <a
            href="https://staging.holisticmindclinic.com/symptom-checker.php"
            className="inline-flex shrink-0 items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Take Assessment
          </a>
        </div>
      </div>
    </section>
  );
}
