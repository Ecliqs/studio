import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function AboutDoctor() {
  const doctorImage = PlaceHolderImages.find(
    (img) => img.id === 'about-doctor'
  );

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-2">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                {doctorImage && (
                  <Image
                    src={doctorImage.imageUrl}
                    alt={doctorImage.description}
                    data-ai-hint={doctorImage.imageHint}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover"
                  />
                )}
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-3">
            <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
              Meet Dr. Meghna
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              A compassionate and dedicated psychologist with over a decade of
              experience in helping individuals navigate life&apos;s challenges.
            </p>
            <p className="mt-4 text-muted-foreground">
              Dr. Meghna believes in a holistic approach to mental wellness,
              integrating evidence-based therapies with personalized care plans.
              Her mission is to create a safe, non-judgmental space where
              clients can explore their thoughts and feelings, develop coping
              strategies, and embark on a journey towards a more fulfilling
              life.
            </p>
            <p className="mt-4 text-muted-foreground">
              She specializes in cognitive-behavioral therapy (CBT), mindfulness
              practices, and relational psychology, with a special focus on
              women&apos;s mental health and life transitions.
            </p>
            <Button size="lg" className="mt-8">
              Learn More About Dr. Meghna
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
