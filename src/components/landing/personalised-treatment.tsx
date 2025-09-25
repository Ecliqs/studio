import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

export function PersonalisedTreatment() {
  const treatmentImage = PlaceHolderImages.find(
    (img) => img.id === 'personalised-treatment'
  );

  const approachPoints = [
    {
      title: 'Body Reset- science backed supplementation plan',
      description:
        'We explore the mind-body connection, using techniques to reduce physiological stress and promote physical well-being as a foundation for mental health.',
    },
    {
      title: 'Beliefs Reframing – Inner Child Work, CBT',
      description:
        'Through collaborative therapy, we identify and challenge limiting beliefs, opening up new perspectives and fostering a more resilient, positive mindset.',
    },
    {
      title: 'Behaviour Reset–  Lifestyle modifications',
      description:
        'We empower you with practical tools and strategies to build healthy habits, improve relationships, and create a life that feels authentic and fulfilling.',
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
              Personalised Treatment with the 3B Approach
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Beyond consultations and therapy, we also provide our Reset to Rise program that supports your mental health & life transitions through the 3B Healing Path:
            </p>
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
