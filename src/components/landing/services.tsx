import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  HeartHandshake,
  Leaf,
  Users,
  Venus,
  BetweenHorizonalEnd,
  Stethoscope,
} from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Leaf,
      title: 'Individual Therapy',
      description:
        'A personalized journey towards self-discovery and growth. We address issues like anxiety, depression, and stress in a supportive one-on-one setting.',
    },
    {
      icon: BetweenHorizonalEnd,
      title: 'Life Transition Coaching',
      description:
        'Navigate significant life changes with confidence. We provide strategies for managing career shifts, relocation, and other major adjustments.',
    },
    {
      icon: HeartHandshake,
      title: 'Relational Trauma',
      description:
        'Heal from the wounds of difficult relationships. Our approach helps you understand patterns, build resilience, and foster healthier connections.',
    },
    {
      icon: Venus,
      title: "Women's Health",
      description:
        'Specialized support for the unique mental health challenges women face, from postpartum issues to hormonal changes and societal pressures.',
    },
    {
      icon: Users,
      title: 'Marriage & Couple Counseling',
      description:
        'Strengthen your partnership by improving communication, resolving conflicts, and deepening your emotional bond in a safe, neutral space.',
    },
    {
      icon: Stethoscope,
      title: 'Health & Wellness',
      description:
        'An integrative approach to mental well-being that considers the interplay of physical health, lifestyle, and psychological factors.',
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-4xl font-semibold text-foreground">
            Therapy Services Designed With Your Growth in Mind
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We offer a range of specialized services to support you on your
            unique path to mental wellness and personal growth.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <CardHeader>
                <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="font-headline pt-4">
                  {service.title}
                </CardTitle>
                <CardDescription className="pt-2">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
