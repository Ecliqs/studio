import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function PersonalisedTreatment() {
  const treatmentImage = PlaceHolderImages.find(
    (img) => img.id === 'personalised-treatment'
  );

  const approachPoints = [
    {
      title: 'LAB TESTS ',
      description: 'Initial evaluation of your current mental health concerns and symptoms.',
    },
    {
      title: 'DETAILED HISTORY TAKING',
      description: 'Comprehensive review of your medical, psychological, and social history.',
    },
    {
      title: 'UNDERSTANDING YOUR SYMPTOMS',
      description: 'Essential laboratory testing to understand your biological markers.',
    },
    {
      title: 'INNER CHILD THERAPY & CBT',
      description: 'Prescription based on severity of the clinical condition.',
    },
    {
      title: 'PERSONALISED PRESCRIPTIONS',
      description: 'Implementation of CBT and REBT therapeutic approaches.',
    },
    {
      title: 'MEDICATIONS & NATURAL SUPPLEMENTS',
      description: 'Customized treatment plan based on lab reports and lifestyle.',
    },
  ];

  return (
    <section
      id="approach"
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            {treatmentImage && (
              <Image
                src={treatmentImage.imageUrl}
                alt={treatmentImage.description}
                data-ai-hint={treatmentImage.imageHint}
                fill
                className="object-cover"
              />
            )}
          </div>
          <div>
            <span className="text-primary font-semibold">Our Unique Method</span>
            <h2 className="mt-2 font-headline text-3xl md:text-4xl font-semibold text-foreground">
Personalised Treatment with the Lab to Life Healing Approach.            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
Beyond consultations and therapy, our Lab to Life Healing Approach supports your mental health and transforms you at 3B Levels— Biology, Beliefs and Behaviour.            </p>
            <ul className="mt-8 space-y-6">
              {approachPoints.map((point, index) => (
                <li key={index} className="flex gap-4">
                  <CheckCircle2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">
                      {point.title}
                    </h3>
                    {/* <p className="text-muted-foreground mt-1">
                      {point.description}
                    </p> */}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
