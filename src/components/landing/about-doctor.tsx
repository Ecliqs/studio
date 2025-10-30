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
              As an integrative psychiatrist, I believe in a holistic approach to mental health. I specialise in management of anxiety, depression, OCD, trauma, PTSD, etc.
            </p>
            <p className="mt-4 text-muted-foreground">
              My prescription includes-
            </p>
            <ul className="mt-4 text-muted-foreground list-disc pl-6">
              <li>Medications (based on severity of the clinical condition)</li>
              <li>Evidence-based therapies</li>
              <li>Personalised diet plan</li>
            </ul>
            <Button size="lg" className="mt-8">
              <a href="#appointment">Book an Appointment</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
